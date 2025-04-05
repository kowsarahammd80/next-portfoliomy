"use client";

// import Image from "next/image";
import {
  Link,
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
// import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const changeBgScroll = () => {
      setNavBar(window.scrollY > 50);
    };

    const highlightSection = () => {
      const sections = ["about", "expertise", "skills", "projects", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", changeBgScroll);
    window.addEventListener("scroll", highlightSection);

    return () => {
      window.removeEventListener("scroll", changeBgScroll);
      window.removeEventListener("scroll", highlightSection);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed z-50 w-full ${navBar ? "navBgColor shadow-lg" : ""}`}
    >
      {/* mx-1 lg:mx-20 xl:mx-32 md:mx-5 */}
      <div className="mx-1 lg:mx-20 xl:mx-20 md:mx-5">
        <nav className="navbar" onClick={() => scroll.scrollToTop()}>
          {/* Logo */}
          <Link href="/">
            <div className=" mt-2">
              <h1 className="text-xl font-semibold portFoliotext">Protfolio</h1>
            </div>
          </Link>
          {/* Navigation Links */}
          <ul
            onClick={closeMenu}
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
          >
            {navLinks.map((link) => (
              <Link
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                activeClass="active"
                key={link.name}
                href={link.href}
                className={`nav-item py-2 px-4 ${
                  activeSection === link.href.slice(1) ? "active" : ""
                }`}
                // className={`nav-item ${pathname === link.href ? "active" : ""}`}
              >
                {/* <p>{link.name}</p> */}
                {link.name}
              </Link>
            ))}
            <button className="get-started block lg:hidden xl:hidden rounded-3xl">
              Hire Me!
            </button>
          </ul>
          {/* Desktop Buttons */}
          <div className="flex justify-end w-auto">
            <button className="get-started hidden lg:block xl:block md:hidden rounded-3xl text-sm">
              Hire Me!
            </button>
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
