import React from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductType } from "../types/Product";

export const useShopContext = () => {
  const { currency, deliveryFee, products, setProductsList } =
    React.useContext(ShopContext);

  const updateProductsList = (newProductsList: ProductType[]) => {
    setProductsList(newProductsList);
  };

  const getLatestProducts = (limit: number) => {
    return products.slice(0, limit);
  };

  const getBestSellerProducts = (limit: number) => {
   return products.filter((product) => product.bestseller).slice(0, limit);
  };

  return {
    currency,
    deliveryFee,
    products,
    updateProductsList,
    getLatestProducts,
    getBestSellerProducts
  };
};
