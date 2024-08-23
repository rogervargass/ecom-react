import React from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductType } from "../types/Product";

export const useShopContext = () => {
  const { currency, deliveryFee, products, setProductsList } = React.useContext(ShopContext);

  const updateProductsList = (newProductsList: ProductType[]) => {
    setProductsList(newProductsList);
  }
  
  return { currency, deliveryFee, products, updateProductsList };
};