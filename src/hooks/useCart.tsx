import React from 'react';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';
import { CartItemType, ProductType } from '../types/Product';
import { formatCurrency } from '../utils/currency';

export const useCart = () => {
  const { currency, deliveryFee, cart, setCart } = React.useContext(ShopContext);

  const addToCart = (product: ProductType, size: string) => {
    const itemInCart = cart.find(item => item.id === product._id && item.size === size);

    if (itemInCart) {
      incrementItem(product._id, size);
      return;
    }

    const cartItem: CartItemType = {
      id: product._id,
      image: product.image[0],
      name: product.name,
      size,
      price: product.price,
      quantity: 1
    }

    setCart([cartItem, ...cart]);
  }

  const removeFromCart = (id: string, size: string) => {
    const itemIndex = cart.findIndex(item => item.id === id && item.size === size);

    if (itemIndex === -1) return;

    const newCart = [...cart];
    newCart.splice(itemIndex, 1);
    
    setCart(newCart);
    toast.warning('Item removed from cart!');
  }

  const decrementItem = (id: string, size: string) => {
    const itemIndex = cart.findIndex(item => item.id === id && item.size === size);

    if (itemIndex === -1) return;

    const newCart = [...cart];

    
    newCart[itemIndex] = {
      ...newCart[itemIndex],
      quantity: newCart[itemIndex].quantity - 1,
    };
    

    setCart(newCart);
  }

  const incrementItem = (id: string, size: string) => {
    const newCart = cart.map(item => {
      if (item.id === id && item.size === size) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }

      return item;
    });

    setCart(newCart);
  }

  const calculateSubTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
  }

  const getTotalCartValue = () => {
    const total = calculateSubTotal() + deliveryFee;

    return {
      subTotal: formatCurrency(calculateSubTotal(), currency),
      deliveryFee: formatCurrency(deliveryFee, currency),
      total: formatCurrency(total, currency)
    }
  }

  const getCartItemsCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  return {
    addToCart,
    removeFromCart,
    getTotalCartValue,
    cart,
    getCartItemsCount,
    decrementItem,
    incrementItem
  }
}

