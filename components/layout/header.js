import { useState, useRef } from "react";

import Link from "next/link";

import NavPortal from "../portals/navPortal";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";

function Header() {
  // let modalContainer = null;
  // useEffect(() => {
  //   console.log(document);
  //   modalContainer = document.querySelector("#_navPortal");
  //   console.log(modalContainer);
  // });

  const [isModalOpen, setModalOpen] = useState(false);

  //

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "About us", path: "/about-us" },
    { title: "Contact", path: "/contact" },
  ];

  const navLinksJSX = navLinks.map((el, i) => {
    return (
      <li
        key={i}
        className="bg-color-primary-darker px-2 rounded-md hover:bg-color-primary-lightest hover:text-color-primary-darker transition-all"
      >
        <Link href={el.path}>{el.title}</Link>
      </li>
    );
  });

  return (
    <header className="sticky top-0 left-0 z-10 w-full py-2 md:py-4  bg-color-primary-darkest text-color-grey-lightest shadow shadow-gray-900 ">
      <div className="w-full lg:w-4/5 mx-auto flex items-center">
        <nav className="hidden lg:block w-full">
          <ul className="flex justify-center gap-6 text-lg font-semibold">
            {navLinksJSX}
          </ul>
        </nav>
        <div className="lg:hidden w-full flex justify-center">
          <button
            onClick={() => {
              setModalOpen((state) => !state);
            }}
          >
            <GiHamburgerMenu className="text-xl" />
          </button>
          <NavPortal
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
            navLinks={navLinks}
          />
        </div>
        <div className="text-xl md:text-3xl  font-bold w-full text-center">
          <Link href="/">PC World</Link>
        </div>
        <ul className="w-full flex justify-center items-center gap-6 lg:text-lg font-semibold">
          <li className="hidden lg:block bg-color-primary-darker px-3 py-0.5 rounded-md hover:bg-color-primary-lightest hover:text-color-primary-darker transition-all">
            <Link href="/login">Login</Link>
          </li>
          <li className="text-xl lg:text-2xl relative hover:scale-105 transition-all">
            <Link href="/cart">
              <MdShoppingCart />
              <span className="absolute text-xs lg:text-sm bottom-3 left-5 lg:bottom-3 lg:left-6 font-bold bg-color-grey-lightest leading-3 px-1.5 py-0.5 text-color-primary-darker rounded-md">
                7
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
