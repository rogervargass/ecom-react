import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { assets, products } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import SectionTitle from "../components/SectionTitle";
import { useCart } from "../hooks/useCart";
import { useShopContext } from "../hooks/useShopContext";
import { formatCurrency } from "../utils/currency";

function Cart() {
  const navigate = useNavigate();
  const { removeFromCart, cart, decrementItem, incrementItem, getCartTotalItems } = useCart();
  const { currency } = useShopContext();
  const cartNotEmpty = getCartTotalItems() > 0;

  const handleProceedToCheckout = () => {
    navigate("/place-order");
  };

  const increment = useCallback(
    (id: string, size: string) => {
      incrementItem(id, size);
    },
    [incrementItem]
  );

  const decrement = useCallback(
    (id: string, size: string) => {
      decrementItem(id, size);
    },
    [decrementItem]
  );

  return (
    <section className="border-t pt-14">
      <div className="text-2xl mb-3">
        <SectionTitle text1="YOUR" text2="CART" />
      </div>

      <section className="w-full flex gap-12 justify-between max-h-[380px]">
        <div className="overflow-y-scroll flex-1">
          {cart.map((item) => (
            <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={item.image} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{products[0].name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{formatCurrency(item.price, currency)}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => decrement(item.id, item.size)}
                  disabled={item.quantity === 1}
                  className="border bg-black text-white px-3 text-center disabled:opacity-55"
                >
                  -
                </button>
                <div className="border max-w-10 sm:max-w-20 sm:min-w-10 px-2 py-1 text-center text-sm">
                  {item.quantity}
                </div>
                <button
                  onClick={() => increment(item.id, item.size)}
                  className="border bg-black text-white px-3 text-center"
                >
                  +
                </button>
              </div>
              <div
                onClick={() => removeFromCart(item.id, item.size)}
                className="w-8 mr-4 p-2 rounded-full sm:w-9 cursor-pointer hover:bg-gray-200"
              >
                <img className="w-full" src={assets.bin_icon} alt="" />
              </div>
            </div>
          ))}
        </div>

        {cartNotEmpty && (
          <div className="flex justify-end">
            <div className="w-full sm:w-[450px]">
              <CartTotal />
              <div className="w-full text-end">
                <button onClick={handleProceedToCheckout} className="bg-black text-white text-sm my-8 px-8 py-3">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

export default Cart;
