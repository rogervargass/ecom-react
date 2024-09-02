import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import SectionTitle from "../components/SectionTitle";
import { useOrder } from "../hooks/useOrder";
import { DeliverySchema } from "../schemas/deliverySchema";
import { PaymentMethodEnum } from "../types/PaymentMethod.enum";
import { DeliveryValidationType, PaymentValidationType } from "../types/Validations";

function PlaceOrder() {
  const navigate = useNavigate();
  const { makePayment } = useOrder();

  const {
    handleSubmit,
    formState: { errors, isValid },
    register: deliveryRegister,
  } = useForm<DeliveryValidationType>({
    resolver: yupResolver(DeliverySchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      phone: "",
    },
  });

  const { register: paymentRegister, getValues: paymentGetValues } = useForm<PaymentValidationType>({
    defaultValues: { paymentMethod: PaymentMethodEnum.COD },
  });

  const goOrders = () => {
    navigate("/orders");
  };

  const onSubmit = (data: DeliveryValidationType) => {
    const paymentMethod = paymentGetValues("paymentMethod");

    if (isValid) {
      makePayment(paymentMethod, data);
      goOrders();
    }
  };

  return (
    <section className="flex flex-col sm:flex-row justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <form className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <SectionTitle text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${
              errors.firstName ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="First name"
            {...deliveryRegister("firstName")}
          />
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${errors.lastName ? "border-red-500" : ""}`}
            type="text"
            placeholder="Last name"
            {...deliveryRegister("lastName")}
          />
        </div>
        <input
          className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${errors.email ? "border-red-500" : ""}`}
          type="email"
          placeholder="Email address"
          {...deliveryRegister("email")}
        />
        <input
          className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${errors.street ? "border-red-500" : ""}`}
          type="text"
          placeholder="Street"
          {...deliveryRegister("street")}
        />
        <div className="flex gap-3">
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${errors.city ? "border-red-500" : ""}`}
            type="text"
            placeholder="City"
            {...deliveryRegister("city")}
          />
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${errors.state ? "border-red-500" : ""}`}
            type="text"
            placeholder="State"
            {...deliveryRegister("state")}
          />
        </div>
        <div className="flex gap-3">
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${errors.zipcode ? "border-red-500" : ""}`}
            type="text"
            pattern="[0-9]*"
            placeholder="Zipcode"
            {...deliveryRegister("zipcode")}
          />
          <input
            className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${errors.country ? "border-red-500" : ""}`}
            type="text"
            placeholder="Country"
            {...deliveryRegister("country")}
          />
        </div>
        <input
          className={`border border-gray-300 rounded py-1.5 px-3.5 w-full ${errors.phone ? "border-red-500" : ""}`}
          type="tel"
          placeholder="Phone"
          {...deliveryRegister("phone")}
        />
        {Object.entries(errors).some((i) => i != undefined) && (
          <ul className="text-red-500">
            <li>{errors.firstName?.message}</li>
            <li>{errors.lastName?.message}</li>
            <li>{errors.email?.message}</li>
            <li>{errors.street?.message}</li>
            <li>{errors.city?.message}</li>
            <li>{errors.state?.message}</li>
            <li>{errors.zipcode?.message}</li>
            <li>{errors.country?.message}</li>
            <li>{errors.phone?.message}</li>
          </ul>
        )}
      </form>

      <div className="mt-3">
        <div className="min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <SectionTitle text1="PAYMENT" text2="METHOD" />
          <fieldset className="flex gap-3 flex-col lg:flex-row">
            <div className="flex items-center gap-3 border p-2 px-3">
              <input
                className={`min-w-3.5 h-3.5 border rounded-full cursor-pointer`}
                type="radio"
                value={PaymentMethodEnum.STRIPE}
                {...paymentRegister("paymentMethod")}
              ></input>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div className="flex items-center gap-3 border p-2 px-3">
              <input
                className={`min-w-3.5 h-3.5 border rounded-full cursor-pointer`}
                type="radio"
                value={PaymentMethodEnum.RAZORPAY}
                {...paymentRegister("paymentMethod")}
              ></input>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div className="flex items-center gap-3 border p-2 px-3">
              <input
                className={`min-w-3.5 h-3.5 border rounded-full cursor-pointer`}
                type="radio"
                value={PaymentMethodEnum.COD}
                {...paymentRegister("paymentMethod")}
              ></input>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </fieldset>

          <div className="w-full text-end mt-8">
            <button onClick={handleSubmit(onSubmit)} className="bg-black text-white px-16 py-3 text-sm">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaceOrder;
