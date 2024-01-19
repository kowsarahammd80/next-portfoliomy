'use client'

import React from "react";
import "./About.css";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';



const About = () => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []) 
  return (
    <div className="">
      <section
        className="mx-5 lg:mx-24 xl:mx-24 md:mx-16 my-5 lg:my-16 flex items-center"
        id="about"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div className="hidden lg:block xl:block justify-center items-center mx-5 lg:mx-28 xl:mx-28 md:mx-10">
            <div className="aboutIamgeDiv" 
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="100"
              data-aos-duration="2000"
            >
              <img
                src="https://i.ibb.co/XzvzSFB/Untitled-design-6.png"
                className="heroImg"
                alt=""
              />
            </div>
          </div>


          
            
            <div className="flex  items-center">
            <div  data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="100"
              data-aos-duration="2000">
              <div className=""
               
               >
                <h1 className="text-2xl text-white lg:text-3xl xl:text-3xl font-semibold mb-5 ">
                  About Me
                </h1>
                <p className="peraText">
                  Hi, I am a MERN stack Developer. I am an expert in Rect JS,
                  Express JS, Mongo DB, javascript, Node js, css3,
                  responsiveness and other essential tools.
                </p>

                <p className="my-5 peraText mb-10">
                  I love to Develop interesting and unique design. I also like
                  to challenge myself to learn new things And I crave for new
                  experiences And Challenges.
                </p>
                <a
                  href="https://drive.google.com/uc?export=download&id=1x0ILZwuvDbEL5RCKRu-uTzDSWN7SjnoD"
                  className="downloadResume"
                >
                  
                  <span>Download Resume</span>
                </a>
              </div>
             
            </div>
          </div>
            
         

          


        </div>
      </section>
    </div>
  );
};

export default About;
