import { useRouter } from "next/router";
import { useEffect } from "react";

const Init = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return <></>;
};

export default Init;
