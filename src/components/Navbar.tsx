import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <section className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo site" className='w-36'/>

      <nav>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <li>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
              <span>HOME</span>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
              <span>COLLECTION</span>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
              <span>ABOUT</span>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
              <span>CONTACT</span>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt="ícone de busca" className='w-5 cursor-pointer' />

        <div className='group relative'>
          <img src={assets.profile_icon} alt="ícone de perfil"  className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className="flex flex-col gap-2 w-36 py3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt="ícone de carrinho" className='w-5 min-w-5'/>
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>5</p>
        </Link>

        <img onClick={() => setIsShowMenu(true)} src={assets.menu_icon} alt="ícone de menu mobile" className='w-5 cursor-pointer sm:hidden'/>
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${isShowMenu ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setIsShowMenu(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180' />
              <p>Back</p>
            </div>

            <nav>
              <ul>
                <li className='py-2 pl-6 border'>
                  <NavLink onClick={() => setIsShowMenu(false)} to='/'>HOME</NavLink>
                </li>
                <li className='py-2 pl-6 border'>
                  <NavLink onClick={() => setIsShowMenu(false)} to='/collection'>COLLECTION</NavLink>
                </li>
                <li className='py-2 pl-6 border'>
                  <NavLink onClick={() => setIsShowMenu(false)} to='/about'>ABOUT</NavLink>
                </li>
                <li className='py-2 pl-6 border'>
                  <NavLink onClick={() => setIsShowMenu(false)} to='/contact'>CONTACT</NavLink>
                </li>
              </ul>
            </nav>
          </div>
      </div>

    </section>
  )
}

export default Navbar