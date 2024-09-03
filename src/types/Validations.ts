import { PaymentMethodEnum } from "./PaymentMethod.enum";

export type LoginValidationType = {
  email: string
  password: string
};

export type RegisterValidationType = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
};

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