import Head from "next/head";
import { BaseSyntheticEvent } from "react";

import { GetServerSideProps } from "next";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { Subscription } from "subscription";

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
import axios from "@utils/useApi";
import { getTranslation, Translation } from "@utils/useTranslation";

import { SubscriptionFormData, useEditSubscription } from "./hooks";
import styles from "./styles.module.css";

type EditSubscriptionProps = { t: Translation; data: Subscription | null };

const EditSubscription = (props: EditSubscriptionProps) => {
  const { control, errors, frequencyOptions, handleCancel, handleUpdate } = useEditSubscription(
    props.data
  );

  return (
    <>
      <Head>
        <title>{props.t.ADD_SUBSCRIPTION_HEADER}</title>
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
            content={props.t.ADD_SUBSCRIPTION_TITLE}
            className={styles.title}
          />
          <AddSubscriptionBody
            t={props.t}
            control={control}
            errors={errors}
            handleUpdate={handleUpdate}
            frequencyOptions={frequencyOptions}
          />
        </div>

        <AddSubscriptionFooter
          t={props.t}
          handleCancel={handleCancel}
        />
      </main>
    </>
  );
};

type AddSubscriptionBodyProps = {
  t: Translation;
  control: Control<SubscriptionFormData>;
  errors: Partial<FieldErrorsImpl<SubscriptionFormData>>;
  handleUpdate: (e?: BaseSyntheticEvent | undefined) => Promise<void>;
  frequencyOptions: { key: string; value: string }[];
};

const AddSubscriptionBody = (props: AddSubscriptionBodyProps) => {
  return (
    <div className={styles.body}>
      <form
        onSubmit={props.handleUpdate}
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

export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
  const { subscId } = query;
  const t = getTranslation(locale);

  if (subscId) {
    const data = await axios
      .get(`/subsc/${subscId}`)
      .then((res) => {
        const fetchedData = res.data[0];

        return {
          service: fetchedData.subsc_name,
          price: Number(fetchedData.price),
          nextPaymentDate: fetchedData.next_payment_date,
          paymentFrequency: fetchedData.payment_frequency,
          genre: fetchedData.genre,
          remark: fetchedData.remark,
        };
      })
      .catch(() => {
        alert(t.ERROR_FAILED_TO_FETCH);

        return null;
      });

    return { props: { t, data } };
  } else {
    return { props: { t, data: null } };
  }
};

export default EditSubscription;
