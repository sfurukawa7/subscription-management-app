import { useRouter } from "next/router";
import { useEffect } from "react";

import { NextPageContext } from "next";

type ErrorPageProps = {
  statusCode: number;
  currentUrl: string;
};

const ErrorPage = (props: ErrorPageProps) => {
  const router = useRouter();

  useEffect(() => {
    if (props.statusCode === 403) router.push(props.currentUrl);
  }, [props.currentUrl, props.statusCode, router]);

  return <div />;
};

ErrorPage.getInitialProps = ({ err, asPath }: NextPageContext) => {
  const statusCode = err?.statusCode ?? 404;

  return { statusCode, currentUrl: asPath };
};

export default ErrorPage;
