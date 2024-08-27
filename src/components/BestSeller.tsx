import { useEffect } from "react";
import { useShopContext } from "../hooks/useShopContext";
import ProductsList from "./ProductsList";
import SectionTitle from "./SectionTitle";

function BestSeller() {
  const { products, getBestSellerProducts } = useShopContext();
  const bestSellers = getBestSellerProducts(4);

  useEffect(() => {}, [products]);

  return (
    <section className="my-10">
      <div className="text-center py-8 text-3xl">
        <SectionTitle text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
      </div>

      <ProductsList products={bestSellers} />
    </section>
  );
}

export default BestSeller;
