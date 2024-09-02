import { object, string } from "yup";
import { PaymentMethodEnum } from "../types/PaymentMethod.enum";
import { PaymentValidationType } from "../types/Validations";

export const PaymentMethodSchema = object<PaymentValidationType>().shape({
  paymentMethod: string()
    .required("Payment method is required")
    .oneOf([PaymentMethodEnum.COD, PaymentMethodEnum.RAZORPAY, PaymentMethodEnum.STRIPE], "Invalid payment method"),
});
