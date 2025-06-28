'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const Navbar = () => {


    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navClasses = `
        ${isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'}
        flex justify-center items-center
        bg-white
        transition-all duration-300 z-30
    `
    const headerClasses = `
        ${isScrolled ? 'text-xl' : 'text-6xl'}
        transition-all duration-300
    `

  return (
    <nav className={navClasses}>
        <Link href="/">
            <span className={headerClasses}>Lamba Building Design</span>
        </Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact Us</Link>
    </nav>
)
}

export default Navbar