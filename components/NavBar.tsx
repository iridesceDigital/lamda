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
      <div className="p-3 md:p-4">
        {/* Desktop header */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Left: Logo */}
          <div className="justify-self-start">
            <Link className="cursor-pointer" href="/">
              <div className="relative w-16 h-16 md:w-24 md:h-24">
                <Image
                  priority
                  src="/Logo2.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          {/* Center: Nav links */}
          <nav className="justify-self-center flex items-center space-x-8 text-neutral-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
          </nav>
          {/* Right: CTA */}
          <div className="justify-self-end">
            <Link href="/contact">
              <button className="px-4 py-1.5 rounded-md bg-[#CFAA4E] text-black font-medium hover:bg-[#c29b3c] focus:outline-none focus:ring-2 focus:ring-[#CFAA4E]/60">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile header */}
        <div className="flex items-center justify-between md:hidden">
          <Link className="cursor-pointer" href="/">
            <div className="relative w-24 h-24">
              <Image
                priority
                src="/Logo2.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="flex">
            {isDropDownVisible ? (
              <div
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
              >
                <X />
                <DropDownMenu onClose={closeDropDown} />
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
    </div>
  );
}

export default NavBar;