import Head from "next/head";

import { Controller } from "react-hook-form";

import MediumText from "@atoms/mediumText";
import TextOutlineInput from "@atoms/textOutlineInput";
import Title from "@atoms/title";
import { Translation } from "@utils/useTranslation";

import { useAddSubscription, useAddSubscriptionBody } from "./hooks";
import styles from "./styles.module.css";

const AddSubscription = () => {
  const { t } = useAddSubscription();

  return (
    <>
      <Head>
        <title>{t.LOGIN_HEADER}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <Title
          content={t.ADD_SUBSCRIPTION_TITLE}
          className=""
        />
        <AddSubscriptionBody t={t} />
      </main>
    </>
  );
};

// define the type of the props of ADDSubscriptionBody
type AddSubscriptionBodyProps = {
  t: Translation;
};

const AddSubscriptionBody = (props: AddSubscriptionBodyProps) => {
  const { register, handleSubmit, control, errors } = useAddSubscriptionBody();

  return (
    <>
      <MediumText
        content={t.COMMON_SERVICE}
        className=""
      />
      <form onSubmit={}>
        <Controller
          name="service"
          control={control}
          rules={{
            required: t.ERROR_SERVICE_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => (
            <TextOutlineInput
              value={value}
              onChange={onChange}
              label="service"
              placeholder=""
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{
            required: t.ERROR_PRICE_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => (
            <TextOutlineInput
              value={value}
              onChange={onChange}
              label="price"
              placeholder=""
            />
          )}
        />
      </form>
    </>
  );
};

export default AddSubscription;
