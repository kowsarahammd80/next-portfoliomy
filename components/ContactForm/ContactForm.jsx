import React from 'react';
import './ContactForm.css';


const ContactForm = () => {

    return (
        <div>
 
            <section className='my-16 mx-5 lg:mx-28'>

                <div className='text-3xl font-semibold'>
                   <h1>Get In Touch</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 my-10 gap-4'>
                     
                     <form action="" className='formdiv'>
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Full Name' />
                         </div>
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Email Address' />
                         </div>
                         <div className="inputDiv my-3">
                            <input type="text" className='inputfild p-2' placeholder='Subject' />
                         </div>
                         <div className="textDiv my-3">
                            <textarea name="" id="" className='w-full h-40 textfild p-2' placeholder='Massage'></textarea>
                         </div>
                     </form>

                     <div className='mx-0 lg:mx-16 flex items-center'>
 
                        <div className='w-full'>
                         <div className='border contactDiv p-3 flex items-center w-full my-3'>
                            <span className='contactIcon ms-0 me-0 lg:ms-5 lg:me-5'><i class="fa-solid fa-envelope"></i></span>
                            <p className='text-sm lg:text-xl p-1'>kowsarahammed80@gmail.com</p>
                          </div>
                         <div className='border contactDiv p-3 flex items-center w-full my-3'>
                            <span className='contactIcon ms-5 me-5'><i class="fa-solid fa-phone"></i></span>
                            <p className='text-sm lg:text-xl p-1'>+8801760075031</p>
                          </div>
                         <div className='border contactDiv p-3 flex items-center w-full'>
                            <span className='contactIcon ms-5 me-5'><i class="fa-solid fa-location-dot"></i></span>
                            <p className='text-md lg:text-xl'>Johirul Islam City Aftab Nagar, Badda, Dhakka-1212</p>
                          </div>
                        </div>

                     </div>

                </div>

            </section>

        </div>
    );

};

export default ContactForm;