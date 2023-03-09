import MediumText from "@atoms/mediumText";

import styles from "./styles.module.css";

type AddSubscriptionInputProps = { content: string; children: React.ReactNode };

const AddSubscriptionInput = (props: AddSubscriptionInputProps) => {
  return (
    <div className={styles.container}>
      <MediumText
        content={props.content}
        className={""}
      />
      {props.children}
    </div>
  );
};

export default AddSubscriptionInput;
