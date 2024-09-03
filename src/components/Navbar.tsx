import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { links } from "../constants/navbar-items";
import { useCart } from "../hooks/useCart";
import { useSearchBar } from "../hooks/useSearchBar";

interface NavBarLinksMobileProps {
  setIsVisibleMenu: (isVisible: boolean) => void;
}

function NavBarLinksMobile({ setIsVisibleMenu }: NavBarLinksMobileProps) {
  return (
    <div className="flex flex-col text-gray-600">
      <div onClick={() => setIsVisibleMenu(false)} className="flex items-center gap-4 p-3 cursor-pointer">
        <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
        <p>Back</p>
      </div>

      <nav>
        <ul>
          {links &&
            links.map((link, index) => (
              <li key={index} className="py-2 pl-6 border">
                <NavLink onClick={() => setIsVisibleMenu(false)} to={link.url}>
                  <span className="uppercase">{link.label}</span>
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

function NavBarLinks() {
  return (
    <nav>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {links &&
          links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.url} className="flex flex-col items-center gap-1">
                <span className="uppercase">{link.label}</span>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}

function Navbar() {
  const { setSearchBarIsVisible } = useSearchBar();
  const { getCartItemsCount } = useCart();
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const cartItemsCount = useMemo(() => getCartItemsCount(), [getCartItemsCount]);

  return (
    <section className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo site" className="w-36" />

      <NavBarLinks />

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="ícone de busca"
          className="w-5 cursor-pointer"
          onClick={() => setSearchBarIsVisible(true)}
        />

        <div className="group relative">
          <Link to="/login">
            <img src={assets.profile_icon} alt="ícone de perfil" className="w-5 cursor-pointer" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="ícone de carrinho" className="w-5 min-w-5" />
          {cartItemsCount > 0 && <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {cartItemsCount}
          </p>}
        </Link>

        <img
          onClick={() => setIsVisibleMenu(true)}
          src={assets.menu_icon}
          alt="ícone de menu mobile"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isVisibleMenu ? "w-full" : "w-0"
        }`}
      >
        <NavBarLinksMobile setIsVisibleMenu={setIsVisibleMenu} />
      </div>
    </section>
  );
}

export default Navbar;
