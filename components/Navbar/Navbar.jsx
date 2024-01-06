"use client"

import Image from 'next/image';
import Link from 'next/link';
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
        <div className='fixed z-50 w-full'>
            
        <header className='navBar-background' >

        {/* <Image src={navLogo} alt="" className='navLogo-set'/> */}

        <h1 className='text-2xl font-semibold ptext'><span className='ptext'>P</span>ortfolio</h1>

         <nav ref={navRef} onClick={showNavbar} className='nav-link'>

             <Link className='navLink-hover' href="/">Home</Link>
             <Link href="#about">About</Link>
             <Link href="#expert">Expertise</Link>
             <Link href="">Project</Link>
             <Link href="">Contact</Link>

             <button
                 className="nav-btn nav-close-btn">
                 <i class="fa-regular fa-circle-xmark"></i>
             </button>
       
         </nav>

         <a href='https://drive.google.com/uc?export=download&id=1x0ILZwuvDbEL5RCKRu-uTzDSWN7SjnoD' className='resumeButton'>Resume</a>

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