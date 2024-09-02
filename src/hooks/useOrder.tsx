import { PaymentMethodEnum } from "../types/PaymentMethod.enum";
import { DeliveryValidationType } from "../types/Validations";
import { useCart } from "./useCart";

export const useOrder = () => {
  const { cart, getTotalCartValue } = useCart();

  const paymentMethods = [
    {
      name: 'Stripe',
      logo: 'stripe_logo'
    },
    {
      name: 'Razorpay',
      logo: 'razorpay_logo'
    },
    {
      name: 'Cash on Delivery',
      logo: 'cash_on_delivery'
    }
  ];

  const makePayment = (method: PaymentMethodEnum, deliveryInfo: DeliveryValidationType) => {
    const { total } = getTotalCartValue(); 

    const order = {
      userInfo: {
        userId: '123',
        userName: 'fulano',
        ...deliveryInfo
      },
      items: cart,
      paymentMethod: method,
      totalToPay: total
    }

    console.log(order);
  };

  return {
    paymentMethods,
    makePayment
  }
};