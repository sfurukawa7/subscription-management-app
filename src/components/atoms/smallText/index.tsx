import Link from "next/link";

import { UrlObject } from "url";

import styles from "./styles.module.sass";

type SmallTextProps = {
  content: string;
  href?: string | UrlObject;
  className?: string;
  onClick?: () => void;
};

const SmallText = (props: SmallTextProps) => {
  return (
    <>
      {props.href ? (
        <Link
          href={props.href}
          className={`${styles["small-text"]}` + (props.className ? ` ${props.className}` : "")}>
          {props.content}
        </Link>
      ) : props.onClick ? (
        <a
          onClick={props.onClick}
          className={`${styles["small-text"]}` + (props.className ? ` ${props.className}` : "")}>
          {props.content}
        </a>
      ) : (
        <span className={`${styles["small-text"]} ${props.className}`}>{props.content}</span>
      )}
    </>
  );
};

export default SmallText;
