import { useMemo, useState } from "react";
import { assets } from "../assets/assets";
import ProductsList from "../components/ProductsList";
import SectionTitle from "../components/SectionTitle";
import { useFilterProducts } from "../hooks/useFilterProducts";
import { useSearchBar } from "../hooks/useSearchBar";
import { Category } from "../types/Category.enum";
import { SortBy } from "../types/SortBy.enum";
import { SubCategory } from "../types/SubCategory.enum";

type CollectionFilters = {
  categories: Category[];
  subCategories: SubCategory[];
  sortBy: SortBy;
};

const initialFilters: CollectionFilters = {
  categories: [],
  subCategories: [],
  sortBy: SortBy.RELEVANCE,
};

function Collection() {
  const { getProductsByFilterAndSort } = useFilterProducts();
  const { searchValue, showSearch } = useSearchBar();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<CollectionFilters>(initialFilters);

  const productsList = useMemo(() => {
    const { categories, subCategories, sortBy } = filters;
    let search = '';
    
    if(searchValue && showSearch) {
      search = searchValue.toLowerCase();
    }

    const filteredProducts = getProductsByFilterAndSort(
      categories,
      subCategories,
      sortBy,
      search
    );
    return filteredProducts;
  }, [filters, getProductsByFilterAndSort, searchValue, showSearch]);

  const onToggleFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterType: "category" | "subCategory"
  ) => {
    const isSelected = e.target.checked;

    if (filterType === "category") {
      const value = e.target.value as Category;
      changeCategory(value, isSelected);
    } else {
      const value = e.target.value as SubCategory;
      changeSubCategory(value, isSelected);
    }
  };

  const onToggleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortBy;
    setFilters((prec) => ({ ...prec, sortBy: value }));
  };

  const changeCategory = (category: Category, isSelected: boolean) => {
    const categories = filters.categories;
    if (isSelected) {
      setFilters((prev) => ({
        ...prev,
        categories: [...categories, category],
      }));
      return;
    }
    setFilters((prev) => ({
      ...prev,
      categories: categories.filter((cat) => cat !== category),
    }));
  };

  const changeSubCategory = (subCategory: SubCategory, isSelected: boolean) => {
    const subCategories = filters.subCategories;
    if (isSelected) {
      setFilters((prev) => ({
        ...prev,
        subCategories: [...subCategories, subCategory],
      }));
      return;
    }
    setFilters((prev) => ({
      ...prev,
      subCategories: subCategories.filter((cat) => cat !== subCategory),
    }));
  };

  return (
    <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="ícone para abrir ou fechar menu de categorias"
          />
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={Category.MEN}
                onChange={(e) => onToggleFilter(e, "category")}
              />{" "}
              {Category.MEN}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={Category.WOMEN}
                onChange={(e) => onToggleFilter(e, "category")}
              />{" "}
              {Category.WOMEN}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={Category.KIDS}
                onChange={(e) => onToggleFilter(e, "category")}
              />{" "}
              {Category.KIDS}
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={SubCategory.TOPWEAR}
                onChange={(e) => onToggleFilter(e, "subCategory")}
              />{" "}
              {SubCategory.TOPWEAR}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={SubCategory.BOTTOMWEAR}
                onChange={(e) => onToggleFilter(e, "subCategory")}
              />{" "}
              {SubCategory.BOTTOMWEAR}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={SubCategory.WINTERWEAR}
                onChange={(e) => onToggleFilter(e, "subCategory")}
              />{" "}
              {SubCategory.WINTERWEAR}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <SectionTitle text1="ALL" text2="COLLECTIONS" />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={onToggleSortBy}
          >
            <option value={SortBy.RELEVANCE}>
              Sort by: {SortBy.RELEVANCE}
            </option>
            <option value={SortBy.LOW_TO_HIGH}>
              Sort by: {SortBy.LOW_TO_HIGH}
            </option>
            <option value={SortBy.HIGH_TO_LOW}>
              Sort by: {SortBy.HIGH_TO_LOW}
            </option>
          </select>
        </div>

        <ProductsList products={productsList} />
      </div>
    </section>
  );
}

export default Collection;
