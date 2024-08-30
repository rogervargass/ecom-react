import React, { createContext, useState } from "react";
import { products } from '../assets/assets';
import { CurrencyEnum } from "../types/Currency.enum";
import { CartItemType, ProductType } from "../types/Product";

type ShopContextProps = {
  currency: CurrencyEnum;
  deliveryFee: number;
  products: ProductType[];
  setProductsList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

type ShopContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUE = {
  currency: CurrencyEnum.USD,
  deliveryFee: 10,
  products: [] as ProductType[],
  setProductsList: () => {},
  showSearch: false,
  setShowSearch: () => {},
  searchValue: '',
  setSearchValue: () => {},
  cart: [] as CartItemType[],
  setCart: () => {},
};

export const ShopContext = createContext<ShopContextProps>(DEFAULT_VALUE);

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [productsList, setProductsList] = useState<ProductType[]>(products as ProductType[]);
  const [searchBarIsVisible, setSearchBarIsVisible] = useState<boolean>(DEFAULT_VALUE.showSearch);
  const [searchValue, setSearchValue] = useState<string>(DEFAULT_VALUE.searchValue);
  const [cart, setCart] = useState<CartItemType[]>([]);

  const providerValue = {
    currency: DEFAULT_VALUE.currency,
    deliveryFee: DEFAULT_VALUE.deliveryFee,
    products: productsList,
    setProductsList,
    showSearch: searchBarIsVisible,
    setShowSearch: setSearchBarIsVisible,
    searchValue,
    setSearchValue,
    cart,
    setCart,
  };

  return (
    <ShopContext.Provider value={providerValue}>
      {children}
    </ShopContext.Provider>
  );
};