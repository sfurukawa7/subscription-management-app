import { useRouter } from "next/router";
import { useState } from "react";

import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { LoginForms } from "loginForms";
import { useForm } from "react-hook-form";

import { auth } from "@utils/configureFirebase";
import { useTranslation } from "@utils/useTranslation";

import { useCommonContext } from "src/context/commonContext";

export const useLogin = () => {
  const {
    control,
    setError,
    getValues,
    formState: { errors },
    handleSubmit: submit,
  } = useForm<LoginForms>();

  const { t } = useTranslation();
  const router = useRouter();
  const { isSubmitting, toggleIsSubmitting, toggleIsModalOpen } = useCommonContext();
  const [isResettingEmail, setIsResettingPassword] = useState<boolean>(false);

  const authorize = async (email: string, password: string) => {
    toggleIsSubmitting(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/home");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setError("email", {
              type: "manual",
              message: t.ERROR_INVALID_EMAIL,
            });
            break;
          case "auth/wrong-password":
            setError("password", {
              type: "manual",
              message: t.ERROR_WRONG_PASSWORD,
            });
            break;
          case "auth/user-not-found":
            setError("email", {
              type: "manual",
              message: t.ERROR_USER_NOT_FOUND,
            });
            break;
          default:
            setError("email", {
              type: "manual",
              message: error.message,
            });
            setError("password", {
              type: "manual",
              message: error.message,
            });
            break;
        }
      });
    toggleIsSubmitting(false);
  };

  const handleFormSubmit = submit((data: LoginForms) => authorize(data.email, data.password));

  const handlePasswordResetLink = () => {
    setIsResettingPassword(true);
  };

  const handleLoginLink = () => {
    setIsResettingPassword(false);
  };

  const handlePasswordReset = () => {
    toggleIsSubmitting(true);
    const email = getValues("email");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toggleIsModalOpen(true);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setError("email", {
              type: "manual",
              message: t.ERROR_INVALID_EMAIL,
            });
            break;
          case "auth/user-not-found":
            setError("email", {
              type: "manual",
              message: t.ERROR_USER_NOT_FOUND,
            });
            break;
          default:
            setError("email", {
              type: "manual",
              message: error.message,
            });
            break;
        }
      });
    toggleIsSubmitting(false);
  };

  return {
    t,
    control,
    errors,
    handleFormSubmit,
    isSubmitting,
    isResettingEmail,
    handlePasswordResetLink,
    handleLoginLink,
    handlePasswordReset,
  };
};
