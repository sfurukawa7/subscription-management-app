import Head from "next/head";
import { BaseSyntheticEvent } from "react";

import { useTranslation } from "next-export-i18n";
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

import { SubscriptionFormData, useEditSubscription } from "./hooks";
import styles from "./styles.module.sass";

const EditSubscription = () => {
  const { t, control, errors, frequencyOptions, handleCancel, handleUpdate } =
    useEditSubscription();

  return (
    <>
      <Head>
        <title>{t("EDIT_SUBSCRIPTION.HEADER")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles["main"]}>
        <MenuBar className={styles["menu-bar"]} />
        <div className={styles["container"]}>
          <Title
            content={t("EDIT_SUBSCRIPTION.TITLE")}
            className={styles["title"]}
          />
          <AddSubscriptionBody
            control={control}
            errors={errors}
            handleUpdate={handleUpdate}
            frequencyOptions={frequencyOptions}
          />
        </div>
        <AddSubscriptionFooter handleCancel={handleCancel} />
      </main>
    </>
  );
};

type AddSubscriptionBodyProps = {
  control: Control<SubscriptionFormData>;
  errors: Partial<FieldErrorsImpl<SubscriptionFormData>>;
  handleUpdate: (e?: BaseSyntheticEvent | undefined) => Promise<void>;
  frequencyOptions: { key: string; value: string }[];
};

const AddSubscriptionBody = (props: AddSubscriptionBodyProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles["body"]}>
      <form
        onSubmit={props.handleUpdate}
        id="subscription-form">
        <Controller
          name="service"
          control={props.control}
          rules={{
            required: t("ERROR.SERVICE_REQUIRED"),
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={t("COMMON.SERVICE")}>
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
            required: t("ERROR.PRICE_REQUIRED"),
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={t("COMMON.PRICE")}>
              <TextOutlineInput
                value={value}
                onChange={onChange}
                label="price"
                placeholder=""
                type="number"
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
            required: t("ERROR.PAYMENT_DATE_REQUIRED"),
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={t("COMMON.PAYMENT_DATE")}>
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
            required: t("ERROR.REQUENCY_REQUIRED"),
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={t("COMMON.PAYMENT_FREQUENCY")}>
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
            required: t("ERROR.GENRE_REQUIRED"),
          }}
          render={({ field: { value, onChange } }) => (
            <AddSubscriptionInput content={t("COMMON.GENRE")}>
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
            <AddSubscriptionInput content={t("COMMON.REMARK")}>
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
  handleCancel: () => void;
};

const AddSubscriptionFooter = (props: AddSubscriptionFooterProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-button"]}>
        <GrayRectangleButton
          type="button"
          content={t("COMMON.CANCEL")}
          className={styles["cancelButton"]}
          handleClick={props.handleCancel}
        />
      </div>
      <div className={styles["footer-button"]}>
        <RectangleButton
          type="submit"
          form="subscription-form"
          content={t("EDIT_SUBSCRIPTION.BUTTON")}
          className=""
        />
      </div>
    </div>
  );
};

export default EditSubscription;
