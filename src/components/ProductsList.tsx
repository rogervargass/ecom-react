import { ProductType } from "../types/Product";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: ProductType[];
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
      {products.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </section>
  );
}

export default ProductsList;
