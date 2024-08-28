import React from "react";
import { ShopContext } from "../context/ShopContext";

export const useSearchBar = () => {
  const { showSearch, setShowSearch, setSearchValue } = React.useContext(ShopContext);

  const setSearchBarIsVisible = (show: boolean) => {
    setShowSearch(show);
  };

  const search = (value: string) => {
    setSearchValue(value);
  };

  return {
    showSearch,
    setSearchBarIsVisible,
    search,
  };
};
