import { PaymentMethodEnum } from "./PaymentMethod.enum"

export type DeliveryValidationType = {
  firstName: string
  lastName: string
  email: string
  street: string
  city: string
  state: string
  zipcode: string
  country: string
  phone: string
}

export type PaymentValidationType = {
  paymentMethod: PaymentMethodEnum;
}