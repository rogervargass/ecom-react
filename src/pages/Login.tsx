import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { LoginSchema } from "../schemas/loginSchema";
import { LoginValidationType } from "../types/Validations";

function Login() {
  const { login } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidationType>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginValidationType) => {
    login(data);
    navigate("/collection");
  };

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-1 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <div className="flex flex-col w-full">
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          {...register("email")}
        />
        <small className="text-red-500 h-5">{errors.email?.message}</small>
      </div>
      <div className="flex flex-col w-full">
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          {...register("password")}
        />
        <small className="text-red-500 h-5">{errors.password?.message}</small>
      </div>
      <div className="w-full flex justify-between text-sm">
        <p className="cursor-pointer">Forgot your password?</p>
        <p className="cursor-pointer">Create account</p>
      </div>
      <button onClick={handleSubmit(onSubmit)} className="text-white font-light bg-black py-2 px-8 mt-4">
        Sign In
      </button>
    </form>
  );
}

export default Login;
