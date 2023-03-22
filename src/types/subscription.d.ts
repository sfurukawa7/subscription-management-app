declare module "subscription" {
  export interface Subscription {
    service: string;
    price: number;
    nextPaymentDate: string;
    paymentFrequency: "month" | "year";
    genre: string;
    remark: string;
  }
}
