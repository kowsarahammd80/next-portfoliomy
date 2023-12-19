import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='pt-20 heroBg'>

            <section className='mx-5 lg:mx-24 xl:mx-24 md:mx-16'>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-screen'>

                     <div className='flex justify-center items-center my-5'>

                        <div>

                          <p className='text-lg font-semibold'>Assalamu Alaikum</p>
                          <h1 className='text-xl lg:text-3xl xl:text-3xl md:text-3xl font-semibold mt-1'>My Selfe, Md Kowsar Ahamed</h1>
                          <p className='text-xl font-semibold mt-1'>Front End Developer</p>

                          <div className='my-5'>
                            <button className='me-5 heroContact-button'>Contact Me</button>
                            <button className='heroContact-button'>Here Me</button>
                          </div>

                          <div className='text-4xl lg:text-5xl xl:text-5xl mt-5 cursor-pointer'>
                             <span className='me-5'><i class="fa-solid fa-envelope"></i></span>
                             <span className='me-5'><i class="fa-brands fa-github"></i></span>
                             <span className='me-5'><i class="fa-brands fa-facebook "></i></span>
                             <span className='me-5'><i class="fa-brands fa-linkedin"></i></span>
                             <span><i class="fa-brands fa-instagram"></i></span>
                          </div>

                        </div> 

                     </div>

                     <div className='flex justify-center items-center mx-5 lg:mx-28 xl:mx-28 md:mx-16'>

                        <div className='iamgeDiv'>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnmYrFIP1VtBj4mUkHl5uRCSKT1ye7qDLZQ&usqp=CAU" className='heroImg' alt="" />
                        </div>   
                        
                     </div>

                </div>

            </section>
            
        </div>
    );
};

export default HeroSection;