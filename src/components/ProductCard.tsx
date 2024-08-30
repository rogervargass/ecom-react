import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../hooks/useShopContext";
import { ProductCardType } from "../types/Product";
import { CurrencyOptions, formatCurrency } from "../utils/currency";

interface ProductCardProps {
  product: ProductCardType;
}

function ProductCard({ product }: ProductCardProps) {
  const { _id, name, price, image } = product;
  const { currency } = useShopContext();

  const formatPrice = useMemo(() => formatCurrency(price, currency as CurrencyOptions), [price, currency]);

  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={`Imagem principal do produto ${name}`}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{formatPrice}</p>
    </Link>
  );
}

export default ProductCard;
