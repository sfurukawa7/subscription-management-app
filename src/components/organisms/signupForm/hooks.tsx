import { useRouter } from "next/router";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

import { auth } from "@utils/configureFirebase";

export type SignupForm = {
  email: string;
  password: string;
};

export const useSignupForm = (onAfterSignup: () => void) => {
  const { register, handleSubmit } = useForm<SignupForm>();
  const createUser = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("ユーザー登録成功", userCredential.user);
        onAfterSignup();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleFormSubmit = handleSubmit((data: SignupForm) =>
    createUser(data.email, data.password)
  );

  return { register, handleFormSubmit };
};
