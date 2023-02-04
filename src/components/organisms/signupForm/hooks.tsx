import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

import { auth } from "@utils/configureFirebase";

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

  const createUser = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("ユーザー登録成功", userCredential.user);
        onAfterSignup();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("email", {
              type: "manual",
              message: "This e-mail is already in use",
            });
            break;
          case "auth/invalid-email":
            setError("email", {
              type: "manual",
              message: "Invalid e-mail address",
            });
            break;
          default:
            setError("email", {
              type: "manual",
              message: "Unexpected Error",
            });
            setError("password", {
              type: "manual",
              message: "Unexpected Error",
            });
            break;
        }
      });
  };

  const handleFormSubmit = handleSubmit((data: SignupForm) =>
    createUser(data.email, data.password)
  );

  return { control, errors, handleFormSubmit };
};
