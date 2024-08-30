import React from "react";
import { ShopContext } from "../context/ShopContext";
import { Category } from "../types/Category.enum";
import { ProductType } from "../types/Product";
import { SortBy } from "../types/SortBy.enum";
import { SubCategory } from "../types/SubCategory.enum";

const sortFn = {
  [SortBy.LOW_TO_HIGH]: (a: ProductType, b: ProductType) => a.price - b.price,
  [SortBy.HIGH_TO_LOW]: (a: ProductType, b: ProductType) => b.price - a.price,
};

export const useFilterProducts = () => {
  const { products } = React.useContext(ShopContext);

  const getProductsByFilterAndSort = (
    newCategories: Category[],
    newSubCategories: SubCategory[],
    sortBy: SortBy,
    search: string
  ) => {
    const filteredListBySearch = filterProductsBySearch(products, search);
    const filteredListByCategory = filterProductsByCategory(filteredListBySearch, newCategories);
    const filteredListBySubCategory = filterProductsBySubCategory(filteredListByCategory, newSubCategories);
    const sortList = sortProductsList(filteredListBySubCategory, sortBy);

    return sortList;
  };

  const filterProductsBySearch = (list: ProductType[], search: string) => {
    if (!search) return list;
    const newList = [...list];

    return newList.filter((product) => product.name.toLowerCase().includes(search));
  };

  const filterProductsByCategory = (list: ProductType[], categoriesList: Category[]) => {
    if (categoriesList.length === 0) return list;
    const newList = [...list];

    return newList.filter((product) => categoriesList.includes(product.category));
  };

  const filterProductsBySubCategory = (list: ProductType[], categoriesList: SubCategory[]) => {
    if (categoriesList.length === 0) return list;
    const newList = [...list];

    return newList.filter((product) => categoriesList.includes(product.subCategory));
  };

  const sortProductsList = (list: ProductType[], sortBy: SortBy) => {
    if (sortBy === SortBy.RELEVANCE) return list;
    const newList = [...list];

    return newList.sort((a, b) => sortFn[sortBy](a, b));
  };

  return {
    getProductsByFilterAndSort,
  };
};
