import { object, ref, string } from "yup";
import { RegisterValidationType } from "../types/Validations";

export const RegisterSchema = object<RegisterValidationType>().shape({
  email: string().email("Email invalid").required("Email is required"),
  password: string().required("Password is required").min(6, 'Password must be at least 6 characters'),
  passwordConfirmation: string().required("Confirm Password is required").oneOf([ref("password")], "Passwords must match"),
  name: string().required("Name is required")
});