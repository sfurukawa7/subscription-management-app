import { useRouter } from "next/router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

import { auth } from "@utils/configureFirebase";

export type LoginForm = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
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
  const handleFormSubmit = handleSubmit((data: LoginForm) => authorize(data.email, data.password));

  return { register, handleFormSubmit };
};
