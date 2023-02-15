import { useRouter } from "next/router";
import { ReactNode, createContext, useState, useContext, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./configureFirebase";

import type { User } from "firebase/auth";

export type UserType = User | null;

export type AuthContextProps = {
  user: UserType;
};

const AuthContext = createContext<Partial<AuthContextProps>>({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = (props: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType>(null);

  const isAvailableForViewing =
    router.pathname === "/" || router.pathname === "/login" || router.pathname === "/signup";
  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      !user && !isAvailableForViewing && (await router.push("/login"));
    });

    return () => {
      authStateChanged();
    };
  }, [isAvailableForViewing, router]);

  return <AuthContext.Provider value={{ user }}>{props.children}</AuthContext.Provider>;
};
