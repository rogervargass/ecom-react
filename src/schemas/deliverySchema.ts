import { object, string } from "yup";
import { DeliveryValidationType } from "../types/Validations";

export const DeliverySchema = object<DeliveryValidationType>().shape({
  firstName: string().required('First name is required').min(2, 'First name is invalid'),
  lastName: string().required('Last name is required').min(2, 'Last name is invalid'),
  email: string().email('Invalid email').required('Email is required'),
  street: string().required('Street is required'),
  city: string().required('City is required'),
  state: string().required('State is required'),
  country: string().required('Country is required'),
  zipcode: string().required('Zipcode is required'),
  phone: string().required('Phone is required')
});