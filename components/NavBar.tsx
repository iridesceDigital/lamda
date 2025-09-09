'use client'
import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./drop-down-menu";

import Link from "next/link";
import Image from "next/image";

const NavBar = () => {

 const [isDropDownVisible, setIsDropDownVisible] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
 }, []);

    const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#CFAA4E]/10 backdrop-blur' : 'bg-transparent'}`}>
      <div className="p-6 md:p-10 flex items-center justify-between">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/lamda-logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden md:flex space-x-10 items-center text-neutral-200"
        >
          <Link href="/" className="hover:text-gray-50">
            Home
          </Link>
          <Link href="/services" className="hover:text-gray-50">Services</Link>
          <Link href="/portfolio" className="hover:text-gray-50">Portfolio</Link>
          
          <Link href="/contact" className="hover:text-gray-50">
            Contact
          </Link>

          
        </div>
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;