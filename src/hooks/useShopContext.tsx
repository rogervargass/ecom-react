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

  const getRelatedProducts = (
    productId: string,
    category: Category,
    subCategory: SubCategory,
    limit: number = 4
  ) => {
    const list: ProductType[] = [];

    for (const product of products) {
      if(list.length >= limit) break;

      if (
        product.category === category &&
        product.subCategory === subCategory &&
        product._id !== productId
      ) {
        list.push(product);
      }
    }

    return list;
  };

  const getProductsByFilterAndSort = (
    newCategories: Category[],
    newSubCategories: SubCategory[],
    sortBy: SortBy,
    search: string
  ) => {
    const filteredListBySearch = filterProductsBySearch(products, search);
    const filteredListByCategory = filterProductsByCategory(
      filteredListBySearch,
      newCategories
    );
    const filteredListBySubCategory = filterProductsBySubCategory(
      filteredListByCategory,
      newSubCategories
    );
    const sortList = sortProductsList(filteredListBySubCategory, sortBy);

    return sortList;
  };

  const getProductById = (id: string, list: ProductType[]) => {
    return list.find(
      (product) => product._id.toLowerCase() === id.toLowerCase()
    );
  };

  const filterProductsBySearch = (list: ProductType[], search: string) => {
    if (!search) return list;

    return list.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  };

  const filterProductsByCategory = (
    list: ProductType[],
    categoriesList: Category[]
  ) => {
    if (categoriesList.length === 0) return list;

    return list.filter((product) => categoriesList.includes(product.category));
  };

  const filterProductsBySubCategory = (
    list: ProductType[],
    categoriesList: SubCategory[]
  ) => {
    if (categoriesList.length === 0) return list;

    return list.filter((product) =>
      categoriesList.includes(product.subCategory)
    );
  };

  const sortProductsList = (list: ProductType[], sortBy: SortBy) => {
    if (sortBy === SortBy.RELEVANCE) return list;
    return list.sort((a, b) => sortFn[sortBy](a, b));
  };

  return {
    currency,
    deliveryFee,
    products,
    updateProductsList,
    getLatestProducts,
    getBestSellerProducts,
    getProductsByFilterAndSort,
    getProductById,
    getRelatedProducts,
  };
};
