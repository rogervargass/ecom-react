import { Category } from "./Category.enum";
import { SubCategory } from "./SubCategory.enum";

export type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: Category;
  subCategory: SubCategory;
  sizes: string[];
  date: number;
  bestseller: boolean;
};

export type ProductCardType = Pick<
  ProductType,
  "_id" | "name" | "price" | "image"
>;
