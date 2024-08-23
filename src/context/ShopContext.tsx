import React, { createContext, useState } from "react";
import { products } from '../assets/assets';
import { ProductType } from "../types/Product";

type ShopContextProps = {
  currency: string;
  deliveryFee: number;
  products: ProductType[];
  setProductsList: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

type ShopContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUE = {
  currency: "$",
  deliveryFee: 10,
  products: [] as ProductType[],
  setProductsList: () => {},
};

export const ShopContext = createContext<ShopContextProps>(DEFAULT_VALUE);

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [productsList, setProductsList] = useState<ProductType[]>(products as ProductType[]);

  const providerValue = {
    currency: DEFAULT_VALUE.currency,
    deliveryFee: DEFAULT_VALUE.deliveryFee,
    products: productsList,
    setProductsList: setProductsList
  };

  return (
    <ShopContext.Provider value={providerValue}>
      {children}
    </ShopContext.Provider>
  );
};