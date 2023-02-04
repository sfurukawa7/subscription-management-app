import { useRouter } from "next/router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginForms } from "loginForms";
import { useForm } from "react-hook-form";

import { auth } from "@utils/configureFirebase";

export const useLogin = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForms>();
  const router = useRouter();
  const authorize = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        router.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  const handleFormSubmit = handleSubmit((data: LoginForms) => authorize(data.email, data.password));

  return { control, errors, handleFormSubmit };
};
