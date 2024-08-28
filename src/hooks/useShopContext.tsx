import React from "react";
import { ShopContext } from "../context/ShopContext";
import { Category } from "../types/Category.enum";
import { ProductType } from "../types/Product";
import { SubCategory } from "../types/SubCategory.enum";

export const useShopContext = () => {
  const { currency, deliveryFee, products, setProductsList } = React.useContext(ShopContext);

  const updateProductsList = (newProductsList: ProductType[]) => {
    setProductsList(newProductsList);
  };

  const getLatestProducts = (limit: number) => {
    return products.slice(0, limit);
  };

  const getBestSellerProducts = (limit: number) => {
    return products.filter((product) => product.bestseller).slice(0, limit);
  };

  const getRelatedProducts = (productId: string, category: Category, subCategory: SubCategory, limit: number = 4) => {
    const list: ProductType[] = [];

    for (const product of products) {
      if (list.length >= limit) break;

      if (product.category === category && product.subCategory === subCategory && product._id !== productId) {
        list.push(product);
      }
    }

    return list;
  };

  const getProductById = (id: string, list: ProductType[]) => {
    return list.find((product) => product._id.toLowerCase() === id.toLowerCase());
  };

  return {
    currency,
    deliveryFee,
    products,
    updateProductsList,
    getLatestProducts,
    getBestSellerProducts,
    getProductById,
    getRelatedProducts,
  };
};
