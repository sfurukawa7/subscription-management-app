import Head from "next/head";
import { BaseSyntheticEvent } from "react";

import { Control, Controller, FieldErrorsImpl } from "react-hook-form";

import DateInput from "@atoms/dateInput";
import ErrorMessage from "@atoms/errorMessage";
import GrayRectangleButton from "@atoms/grayRectangleButton";
import RectangleButton from "@atoms/rectangleButton";
import SelectInput from "@atoms/selectInput";
import TextOutlineInput from "@atoms/textOutlineInput";
import TextOutlineInputArea from "@atoms/textOutlineInputArea";
import Title from "@atoms/title";
import AddSubscriptionInput from "@molecules/AddSubscriptionInput";
import MenuBar from "@molecules/menuBar";
import { Translation } from "@utils/useTranslation";

import { SubscriptionFormData, useAddSubscription } from "./hooks";
import styles from "./styles.module.css";

const AddSubscription = () => {
  const { t, control, errors, frequencyOptions, handleCancel, handleAdd } = useAddSubscription();

  return (
    <>
      <Head>
        <title>{t.ADD_SUBSCRIPTION_HEADER}</title>
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
        <MenuBar className={styles.menuBar} />
        <div className={styles.container}>
          <Title
            content={t.ADD_SUBSCRIPTION_TITLE}
            className={styles.title}
          />
          <AddSubscriptionBody
            t={t}
            control={control}
            errors={errors}
            handleAdd={handleAdd}
            frequencyOptions={frequencyOptions}
          />
          <AddSubscriptionFooter
            t={t}
            handleCancel={handleCancel}
            handleAdd={handleAdd}
          />
        </div>
      </main>
    </>
  );
};

type AddSubscriptionBodyProps = {
  t: Translation;
  control: Control<SubscriptionFormData>;
  errors: Partial<FieldErrorsImpl<SubscriptionFormData>>;
  handleAdd: (e?: BaseSyntheticEvent | undefined) => Promise<void>;
  frequencyOptions: { key: string; value: string }[];
};

const AddSubscriptionBody = (props: AddSubscriptionBodyProps) => {
  return (
    <div className={styles.body}>
      <form
        onSubmit={props.handleAdd}
        id="subscription-form">
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
        {props.errors.service && (
          <ErrorMessage
            content={props.errors.service.message ?? ""}
            className=""
          />
        )}
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
        {props.errors.price && (
          <ErrorMessage
            content={props.errors.price.message ?? ""}
            className=""
          />
        )}
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
        {props.errors.paymentDate && (
          <ErrorMessage
            content={props.errors.paymentDate.message ?? ""}
            className=""
          />
        )}
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
        {props.errors.paymentFrequency && (
          <ErrorMessage
            content={props.errors.paymentFrequency.message ?? ""}
            className=""
          />
        )}
        <Controller
          name="genre"
          control={props.control}
          rules={{
            required: props.t.ERROR_GENRE_REQUIRED,
          }}
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
        {props.errors.genre && (
          <ErrorMessage
            content={props.errors.genre.message ?? ""}
            className=""
          />
        )}
        <Controller
          name="remark"
          control={props.control}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={props.t.COMMON_REMARK}>
              <TextOutlineInputArea
                value={value}
                onChange={onChange}
                label="remark"
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
          form="subscription-form"
          content={props.t.ADD_SUBSCRIPTION_BUTTON}
          className={styles.addButton}
        />
      </div>
    </div>
  );
};

export default AddSubscription;
