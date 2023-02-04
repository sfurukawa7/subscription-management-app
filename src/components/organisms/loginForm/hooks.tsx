import { useRouter } from "next/router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginForms } from "loginForms";
import { useForm } from "react-hook-form";

import { auth } from "@utils/configureFirebase";

export const useLogin = () => {
  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForms>();
  const router = useRouter();
  const authorize = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/home");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setError("email", {
              type: "manual",
              message: "Invalid e-mail address",
            });
            break;
          case "auth/wrong-password":
            setError("password", {
              type: "manual",
              message: "Your password is incorrect",
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
  };
  const handleFormSubmit = handleSubmit((data: LoginForms) => authorize(data.email, data.password));

  return { control, errors, handleFormSubmit };
};
