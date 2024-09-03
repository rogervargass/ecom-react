import { object, string } from "yup";
import { LoginValidationType } from "../types/Validations";

export const LoginSchema = object<LoginValidationType>().shape({
  email: string().email("Email invalid").required("Email is required"),
  password: string().required("Password is required")
});