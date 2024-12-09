"use client"

import Image from 'next/image';
import {Link} from 'react-scroll';
import React, { useRef } from 'react';
import './Navbar.css'



const Navbar = () => {

       
    const navRef = useRef();
     
    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (
        <div className='fixed z-50 w-full shadow-lg'>
            
        <header className='navBar-background' >

        {/* <Image src={navLogo} alt="" className='navLogo-set'/> */}

        <Link to='heroSection' smooth={true} className='text-2xl cursor-pointer font-semibold navTeaxt'><span className='ptext'>P</span>ortfolio</Link>

         <nav ref={navRef} onClick={showNavbar} className='nav-link'>

             <Link onClick={showNavbar} className='navLink-hover' to="heroSection" smooth={true}>Home</Link>
             <Link onClick={showNavbar} className='navLink-hover' to="about" smooth={true} offset={-120} duration={500}>About</Link>
             <Link onClick={showNavbar} className='navLink-hover' to="expert" smooth={true} offset={-150} duration={500}>Expertise</Link>
             <Link onClick={showNavbar} className='navLink-hover' to="Skill" smooth={true} offset={-150} duration={500}>Skills</Link>
             <Link onClick={showNavbar} className='navLink-hover' to="work" smooth={true} offset={-100} duration={500}>Project</Link>
             <Link onClick={showNavbar} className='navLink-hover' to="contact" smooth={true} offset={-80} duration={500}>Contact</Link>

             <div className='resumeButton lg:ms-52 xl:ms-52 ms-0'> 
         <a href='https://drive.google.com/uc?export=download&id=1XzegnbXfOrsdEKwZr9YoRGUPIwGOaXBq' >Resum<span className='navReasumeText'>e</span></a>
         </div>

             <button
                 className="nav-btn nav-close-btn">
                 <i class="fa-regular fa-circle-xmark"></i>
             </button>
       
         </nav>

         <button
             className="nav-btn"
             onClick={showNavbar}>
             <i class="fa-solid fa-bars"></i>
         </button>

     </header>

     </div>
    );
};

export default Navbar;