'use client'

import React from 'react';
import './Skills.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';



const Skills = () => {
    
     useEffect(() => {
          AOS.init({
               duration: 800,
               once: false,
             })
       }, []) 
 
    return (
     
        <div id='skills'>

            <section className='mx-5 xl:mx-28 lg:mx-28 md:mx-16'
             
            >

                  <div className='font-semibold mt-10'>
                    <h1 className='pb-5 lg:pb-5 xl:pb-5 text-2xl lg:text-5xl xl:text-5xl aboutMeText'
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="2000"
                    >My Skills</h1>
                  </div>

                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-5 lg:mx-28 xl:mx-28 pt-5 pb-16 gap-10'>

                    <div className='nextJsImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://cdn-icons-png.flaticon.com/512/274/274429.png" className='skillImg iconColor' alt="" id='html' />
                         <p className='skillsName'>HTML</p>
                    </div>
                    <div className='skillImgDiv nextJsImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://cdn.iconscout.com/icon/free/png-256/free-css-107-457937.png" className='skillImg grayIcons' alt="" />
                         <p className='skillsName '>CSS</p>
                    </div>
                    <div className='skillImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/download/372804/bootstrap.svg" className='skillImg iconColor' alt="" />
                         <p className='skillsName'>Bootstrap</p>
                    </div>
                    <div className='skillImgDiv'
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-offset="100"
                      data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/show/368997/tailwind.svg" className='skillImg' alt="" />
                         <p className='skillsName'>Taillwind Css</p>
                    </div>
                    <div className='skillImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.iconbolt.com/iconsets/ionicons-regular/logo-nodejs.svg" className='skillImg' alt="" />
                         <p className='skillsName'>JavaScript</p>
                    </div>
                    <div className='skillImgDiv'
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/show/358128/react.svg" className='skillImg' alt="" />
                         <p className='skillsName'>React JS</p>
                    </div>
                    <div className='nextJsImgDiv'
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://images.seeklogo.com/logo-png/39/2/next-js-logo-png_seeklogo-394608.png" className='skillImg' alt="" />
                         <p className='skillsName'>Next JS</p>
                    </div>
                    <div className='skillImgDiv' 
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-offset="100"
                      data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/show/327361/logo-firebase.svg" className='skillImg' alt="" />
                         <p className='skillsName'>Firebase</p>
                    </div>
                    <div className='skillImgDiv' 
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/show/342044/mongodb.svg" className='skillImg' alt="" />
                         <p className='skillsName'>Mongodb</p>
                    </div>
                    <div className='skillImgDiv'  
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://www.svgrepo.com/download/314392/node.svg" className='skillImg' alt="" />
                         <p className='skillsName'>Node JS</p>
                    </div>
                    <div className='bkashSkillImgDiv'  
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png" className='skillImg bkashGrayIcons' alt="" />
                         <p className='skillsName'>Bkash</p>
                    </div>
                    <div className='paySkillImgDiv'  
                     data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-offset="100"
                     data-aos-duration="1000"
                    >
                         <img src="https://paystation.com.bd/images/logo/logo.png" className='skillImg bkashGrayIcons' alt="" />
                         <p className='skillsName'>Pay Station</p>
                    </div>
                     
                  </div>

            </section>

        </div>
    );
};

export default Skills;