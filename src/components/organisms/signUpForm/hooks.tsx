import { createUserWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "next-export-i18n";
import { useForm } from "react-hook-form";

import { auth } from "@utils/configureFirebase";

import { useCommonContext } from "src/context/commonContext";

export type SignUpForm = {
  email: string;
  password: string;
};

export const useSignUpForm = () => {
  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpForm>();

  const { t } = useTranslation();
  const { isSubmitting, toggleIsSubmitting, toggleIsModalOpen } = useCommonContext();

  const createUser = async (email: string, password: string) => {
    toggleIsSubmitting(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toggleIsModalOpen(true);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("email", {
              type: "manual",
              message: t("ERROR.EMAIL_ALREADY_IN_USE"),
            });
            break;
          case "auth/invalid-email":
            setError("email", {
              type: "manual",
              message: t("ERROR.INVALID_EMAIL"),
            });
            break;
          default:
            setError("email", {
              type: "manual",
              message: t("ERROR.DEFAULT"),
            });
            setError("password", {
              type: "manual",
              message: t("ERROR.DEFAULT"),
            });
            break;
        }
      });
    toggleIsSubmitting(false);
  };

  const handleFormSubmit = handleSubmit((data: SignUpForm) =>
    createUser(data.email, data.password)
  );

  return { control, errors, handleFormSubmit, t, isSubmitting };
};
