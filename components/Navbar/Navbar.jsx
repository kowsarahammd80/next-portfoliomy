"use client";

import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const changeBgScroll = () => setNavBar(window.scrollY > 50);

    window.addEventListener("scroll", changeBgScroll);
    return () => window.removeEventListener("scroll", changeBgScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Expertise", href: "expertise" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <div className={`fixed z-50 w-full ${navBar ? "navBgColor shadow-lg" : ""}`}>
      <div className="mx-1 lg:mx-20 xl:mx-20 md:mx-5">
        <nav className="navbar">
          {/* Logo */}
          <div className="mt-2 cursor-pointer" onClick={() => scroll.scrollToTop()}>
            <h1 className="text-xl font-semibold portFoliotext">Portfolio</h1>
          </div>

          {/* Navigation Links */}
          <ul onClick={closeMenu} className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-100}
                spy={true}
                activeClass="active"
                className="nav-item py-2 px-4 cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}

            {/* Mobile Button */}
            <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
              <button className="get-started block lg:hidden xl:hidden rounded-3xl">
                Hire Me!
              </button>
            </ScrollLink>
          </ul>

          {/* Desktop Button */}
          <div className="flex justify-end w-auto">
            <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
              <button className="get-started hidden lg:block xl:block md:hidden rounded-3xl text-sm">
                Hire Me!
              </button>
            </ScrollLink>
          </div>

          {/* Hamburger Menu */}
          <div className="breadcrumb w-auto" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
