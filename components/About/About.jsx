import React from 'react';
import './About.css';



const About = () => {
    return (
        <div>
             
             <section className='mx-5 lg:mx-24 xl:mx-24 md:mx-16 my-16 flex items-center' id='about'>

                  <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>

                      <div className='hidden lg:block xl:block justify-center items-center mx-5 lg:mx-28 xl:mx-28 md:mx-10'>
                          <div className='aboutIamgeDiv'> 
                             <img src="https://scontent-ccu1-2.xx.fbcdn.net/v/t39.30808-6/337982794_1173057913395534_7542538759370505223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGEQTbWqiNuU84ke_cCmi_-0x5AinlcVRnTHkCKeVxVGa5agYJm_J7HohwgGMVvoyIoOkpPKPbGTR4FZhemVB4P&_nc_ohc=Jx458CZVUVYAX9_RM-I&_nc_ht=scontent-ccu1-2.xx&oh=00_AfD_whGwdDB3w2sw_o3db99GWn9lWTGJ9JFyzs7P2otAsA&oe=65875A21" className='heroImg' alt="" />
                          </div>
                      </div>

                      <div className='flex justify-start items-center'>

                           <div className=''>

                                <h1 className='text-2xl lg:text-3xl xl:text-3xl font-semibold mb-5'>About Me</h1>
                                <p>Hi, I am a MERN stack Developer. I am an expert in Rect JS, Express JS, Mongo DB, javascript, Node js, css3, responsiveness and other essential tools.</p>

                                <p className='my-5'>I love to Develop interesting and unique design. I also like to challenge myself to learn new things And I crave for new experiences And Challenges.</p>

                           </div>

                      </div>

                  </div>

             </section>

        </div>
    );
};

export default About;