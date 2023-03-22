declare module "subscription" {
  export type APIGetSubscriptionList = {
    subsc_name: string;
    price: string;
    next_payment_date: string;
    payment_frequency: string;
    subsc_id: string;
  }[];

  export type Subscription = {
    service: string;
    price: number;
    nextPaymentDate: string;
    paymentFrequency: "month" | "year";
    genre: string;
    remark: string;
  };

  export type SubscriptionList = {
    service: string;
    price: number;
    nextPaymentDate: string;
    paymentFrequency: "month" | "year";
    subscId: string;
  }[];
}
