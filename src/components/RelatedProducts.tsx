import { useMemo } from "react";
import { useShopContext } from "../hooks/useShopContext";
import { Category } from "../types/Category.enum";
import { SubCategory } from "../types/SubCategory.enum";
import ProductsList from "./ProductsList";
import SectionTitle from "./SectionTitle";

type RelatedProductsProps = {
  productId: string;
  category: Category;
  subCategory: SubCategory;
};

function RelatedProducts({ category, subCategory, productId }: RelatedProductsProps) {
  const { getRelatedProducts } = useShopContext();

  const products = useMemo(() => getRelatedProducts(productId, category, subCategory), [
    category,
    subCategory,
    getRelatedProducts,
    productId
  ]);
  
  return (
    <section className="my-10">
      <div className="text-center py-8 text-3xl">
        <SectionTitle text1="RELATED" text2="PRODUCTS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
      </div>

      <ProductsList products={products} />
    </section>
  );
  
}

export default RelatedProducts