import Head from "next/head";

import { Controller } from "react-hook-form";

import SelectInput from "@atoms/dateInput";
import TextOutlineInput from "@atoms/textOutlineInput";
import Title from "@atoms/title";
import AddSubscriptionInput from "@molecules/AddSubscriptionInput";
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

type AddSubscriptionBodyProps = {
  t: Translation;
};

const AddSubscriptionBody = (props: AddSubscriptionBodyProps) => {
  const { register, handleSubmit, control, errors, dateOptions, frequencyOptions } =
    useAddSubscriptionBody();

  return (
    <div className={styles.body}>
      <form onSubmit={() => handleSubmit}>
        <Controller
          name="service"
          control={control}
          rules={{
            required: props.t.ERROR_SERVICE_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_SERVICE}>
              <TextOutlineInput
                value={value}
                onChange={onChange}
                label="service"
                placeholder=""
              />
            </AddSubscriptionInput>
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{
            required: props.t.ERROR_PRICE_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_PRICE}>
              <TextOutlineInput
                value={value}
                onChange={onChange}
                label="price"
                placeholder=""
              />
            </AddSubscriptionInput>
          )}
        />
        <Controller
          name="paymentDate"
          control={control}
          rules={{
            required: props.t.ERROR_PAYMENT_DATE_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_PAYMENT_DATE}>
              <SelectInput
                value={value}
                onChange={onChange}
                label="payment_date"
                options={dateOptions}
              />
            </AddSubscriptionInput>
          )}
        />
        <Controller
          name="paymentFrequency"
          control={control}
          rules={{
            required: props.t.ERROR_FREQUENCY_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_PAYMENT_FREQUENCY}>
              <SelectInput
                value={value}
                onChange={onChange}
                label="payment_frequency"
                options={frequencyOptions}
              />
            </AddSubscriptionInput>
          )}
        />
      </form>
    </div>
  );
};

export default AddSubscription;
