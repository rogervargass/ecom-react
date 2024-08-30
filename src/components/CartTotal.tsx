import { useMemo } from 'react';
import { useCart } from '../hooks/useCart';
import SectionTitle from './SectionTitle';

function CartTotal() {
  const { getTotalCartValue } = useCart();
  const { subTotal, deliveryFee, total } = useMemo(() => getTotalCartValue(), [getTotalCartValue]);

  return (
    <section className='w-full'>
      <div className="text-2xl">
        <SectionTitle text1='CART' text2='TOTALS' />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{subTotal}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{deliveryFee}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>{total}</b>
        </div>
      </div>
    </section>
  )
}

export default CartTotal