import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

import { auth } from "@utils/configureFirebase";
import { useTranslation } from "@utils/useTranslation";

export type SignupForm = {
  email: string;
  password: string;
};

export const useSignupForm = (onAfterSignup: () => void) => {
  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupForm>();

  const { t } = useTranslation();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const createUser = async (email: string, password: string) => {
    setIsSubmit(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        onAfterSignup();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("email", {
              type: "manual",
              message: t.ERROR_EMAIL_ALREADY_IN_USE,
            });
            break;
          case "auth/invalid-email":
            setError("email", {
              type: "manual",
              message: t.ERROR_INVALID_EMAIL,
            });
            break;
          default:
            setError("email", {
              type: "manual",
              message: t.ERROR_DEFAULT,
            });
            setError("password", {
              type: "manual",
              message: t.ERROR_DEFAULT,
            });
            break;
        }
      });
    setIsSubmit(false);
  };

  const handleFormSubmit = handleSubmit((data: SignupForm) =>
    createUser(data.email, data.password)
  );

  return { control, errors, handleFormSubmit, t, isSubmit };
};
