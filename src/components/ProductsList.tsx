import { ProductType } from "../types/Product";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: ProductType[];
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {products.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </section>
  );
}

export default ProductsList;
