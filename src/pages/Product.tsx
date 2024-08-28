import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { useShopContext } from "../hooks/useShopContext";
import { ProductType } from "../types/Product";

function Product() {
  const { getProductById, products } = useShopContext();
  const { productId } = useParams<{ productId: string }>();
  const [productData, setProductData] = useState<ProductType | null>(null);
  const [sizeSelected, setSizeSelected] = useState<string | null>(null);

  const fetchProduct = useCallback(async () => {
    if (!productId) return null;

    const product = getProductById(productId, products);
    if (product) setProductData(product);
  }, [productId, products, getProductById]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (!productData) return;

  return (
    <section className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((image, index) => (
              <img key={index} src={image} className="w-[24%] sm:w-full flex flex-shrink-0 cursor-pointer" />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={productData.image[0]} alt="" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSizeSelected(size)}
                  className={`border py-2 px-4 bg-gray-200 ${size === sizeSelected ? "border-black" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo. Eveniet dignissimos dolores eius atque
            earum quisquam dolorem. Vitae autem modi esse dolorum delectus, corporis eligendi animi vel assumenda. Illum
            nulla odit magnam consequatur nostrum. Dicta recusandae laudantium libero fuga quisquam ratione iste
            perferendis, earum in reprehenderit. Ea, veniam laudantium!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia error cupiditate dolorem omnis
            aliquid harum? In labore numquam minus aspernatur tempora id quas sapiente cum perferendis voluptate, iure
            laudantium?
          </p>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        productId={productData._id}
      />
    </section>
  );
}

export default Product;
