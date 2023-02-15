import Link from "next/link";

import { UrlObject } from "url";

import styles from "./styles.module.css";

type SmallTextProps = {
  content: string;
  href?: string | UrlObject;
  className?: string;
};

const SmallText = (props: SmallTextProps) => {
  return (
    <>
      {props.href ? (
        <Link
          href={props.href}
          className={`${styles.smallText}` + (props.className ? ` ${props.className}` : "")}>
          {props.content}
        </Link>
      ) : (
        <span className={`${styles.smallText} ${props.className}`}>{props.content}</span>
      )}
    </>
  );
};

export default SmallText;
