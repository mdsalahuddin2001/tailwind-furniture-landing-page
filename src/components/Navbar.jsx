import { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.svg';
import { CgMenuRight, CgClose } from 'react-icons/cg';
// data
import { navigation } from '../data';
import NavMobile from './NavMobile';

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    // event listener function
    const whenScroll = () => {
      // when scrollY is bigger than 50px set navbar bg to true
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    };
    window.addEventListener('scroll', whenScroll);
    return () => window.removeEventListener('scroll', whenScroll);
  }, []);

  return (
    <nav
      className={`${
        bg ? 'bg-primary py-8 lg:py-6' : 'bg-transparent'
      } fixed left-0 py-8 w-full transition-all duration-300 z-20`}
    >
      <div className="container flex items-center justify-between">
        {/* logo */}
        <a href="#home">
          <img src={Logo} alt="furnishop" className="h-5 lg:h-8" />
        </a>
        <button className="md:hidden text-2xl text-white cursor-pointer">
          {mobileNav ? <CgClose /> : <CgMenuRight />}
        </button>
        <ul className="hidden md:flex space-x-10">
          {navigation.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className="capitalize text-white hover:border-b transition-all"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        {/* mobile nav */}
        <div
          className={`${mobileNav ? 'left-0' : '-left-full'} md:hidder
         fixed top-0 bottom-0  w-full max-w-xs h-screen transition-all`}
        >
          <NavMobile />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
