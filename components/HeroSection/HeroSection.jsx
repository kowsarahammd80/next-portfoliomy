import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
    return (
        <div className='pt-20 heroBg'>

            <section className='mx-5 lg:mx-24 xl:mx-24 md:mx-16'>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-screen'>

                     <div className='flex justify-center items-center'>

                        <div className='text-design'>

                          <p className='text-lg font-semibold text-design'>Assalamu Alaikum</p>
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
                          <img src="https://scontent-ccu1-2.xx.fbcdn.net/v/t39.30808-6/337982794_1173057913395534_7542538759370505223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGEQTbWqiNuU84ke_cCmi_-0x5AinlcVRnTHkCKeVxVGa5agYJm_J7HohwgGMVvoyIoOkpPKPbGTR4FZhemVB4P&_nc_ohc=Jx458CZVUVYAX9_RM-I&_nc_ht=scontent-ccu1-2.xx&oh=00_AfD_whGwdDB3w2sw_o3db99GWn9lWTGJ9JFyzs7P2otAsA&oe=65875A21" className='heroImg' alt="" />
                        </div>   
                        
                     </div>

                </div>

            </section>
            
        </div>
    );
};

export default HeroSection;