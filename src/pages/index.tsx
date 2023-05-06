import { GetStaticProps } from "next";

const Init = () => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

export default Init;
