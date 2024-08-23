export type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
};

export type ProductCardType = Pick<
  ProductType,
  "_id" | "name" | "price" | "image"
>;
