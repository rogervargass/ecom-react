import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useSearchBar } from "../hooks/useSearchBar";

function SearchBar() {
  const { showSearch, setSearchBarIsVisible, search } = useSearchBar();
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const isCollectionPage = location.pathname.includes('collection');
  const searchBarIsVisible = showSearch && isCollectionPage;

  const handleSearch = () => {
    search(inputRef.current?.value || '');
  }

  return searchBarIsVisible && (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input ref={inputRef} onChange={handleSearch} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search"/>
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img onClick={() => setSearchBarIsVisible(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon} alt="" />
    </div>
  )
}

export default SearchBar