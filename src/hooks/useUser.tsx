import { toast } from "react-toastify";
import { LoginValidationType, RegisterValidationType } from "../types/Validations";

export const useUser = () => {
  const login = (credentials: LoginValidationType) => {
    const name = credentials.email.split("@")[0];
    toast.success(`Welcome back! ${name}`);
  };

  const register = (userData: RegisterValidationType) => {
    const name = userData.name;
    toast.success(`Account created successfully! Welcome, ${name}`);
  };

  const getUserInfo = () => {
    return {
      name: "John Doe",
      email: "johnDoe@email.com"
    }
  };

  return { login, register, getUserInfo };
}