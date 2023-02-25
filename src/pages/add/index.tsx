import Head from "next/head";

import { Control, Controller, FieldErrorsImpl, UseFormHandleSubmit } from "react-hook-form";

import DateInput from "@atoms/dateInput";
import GrayRectangleButton from "@atoms/grayRectangleButton";
import RectangleButton from "@atoms/rectangleButton";
import SelectInput from "@atoms/selectInput";
import TextOutlineInput from "@atoms/textOutlineInput";
import TextOutlineInputArea from "@atoms/textOutlineInputArea";
import Title from "@atoms/title";
import AddSubscriptionInput from "@molecules/AddSubscriptionInput";
import { Translation } from "@utils/useTranslation";

import { SubscriptionFormData, useAddSubscription } from "./hooks";
import styles from "./styles.module.css";

const AddSubscription = () => {
  const { t, handleSubmit, control, errors, frequencyOptions, handleCancel, handleAdd } =
    useAddSubscription();

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
          className={styles.title}
        />
        <AddSubscriptionBody
          t={t}
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          frequencyOptions={frequencyOptions}
        />
        <AddSubscriptionFooter
          t={t}
          handleCancel={handleCancel}
          handleAdd={handleAdd}
        />
      </main>
    </>
  );
};

type AddSubscriptionBodyProps = {
  t: Translation;
  control: Control<SubscriptionFormData>;
  errors: Partial<FieldErrorsImpl<SubscriptionFormData>>;
  handleSubmit: UseFormHandleSubmit<SubscriptionFormData>;
  frequencyOptions: string[];
};

const AddSubscriptionBody = (props: AddSubscriptionBodyProps) => {
  return (
    <div className={styles.body}>
      <form onSubmit={() => props.handleSubmit}>
        <Controller
          name="service"
          control={props.control}
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
          control={props.control}
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
          control={props.control}
          rules={{
            required: props.t.ERROR_PAYMENT_DATE_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_PAYMENT_DATE}>
              <DateInput
                value={value}
                onChange={onChange}
                label="payment_date"
              />
            </AddSubscriptionInput>
          )}
        />
        <Controller
          name="paymentFrequency"
          control={props.control}
          rules={{
            required: props.t.ERROR_FREQUENCY_REQUIRED,
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_PAYMENT_FREQUENCY}>
              <SelectInput
                value={value}
                onChange={onChange}
                label="payment_frequency"
                options={props.frequencyOptions}
              />
            </AddSubscriptionInput>
          )}
        />
        <Controller
          name="genre"
          control={props.control}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_GENRE}>
              <TextOutlineInput
                value={value}
                onChange={onChange}
                label="genre"
                placeholder=""
              />
            </AddSubscriptionInput>
          )}
        />
        <Controller
          name="note"
          control={props.control}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_NOTE}>
              <TextOutlineInputArea
                value={value}
                onChange={onChange}
                label="note"
                placeholder=""
              />
            </AddSubscriptionInput>
          )}
        />
      </form>
    </div>
  );
};

type AddSubscriptionFooterProps = {
  t: Translation;
  handleCancel: () => void;
  handleAdd: () => void;
};

const AddSubscriptionFooter = (props: AddSubscriptionFooterProps) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerButton}>
        <GrayRectangleButton
          type="button"
          content={props.t.COMMON_CANCEL}
          className={styles.cancelButton}
          handleClick={props.handleCancel}
        />
      </div>
      <div className={styles.footerButton}>
        <RectangleButton
          type="submit"
          content={props.t.ADD_SUBSCRIPTION_BUTTON}
          className={styles.addButton}
          handleClick={props.handleAdd}
        />
      </div>
    </div>
  );
};

export default AddSubscription;
