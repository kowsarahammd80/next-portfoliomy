import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div>

            <section className='mx-5 xl:mx-28 lg:mx-28 md:mx-16'>

                  <div className='text-3xl font-semibold my-5'>
                    <h1 className=''>Skills</h1>
                  </div>

                  <div className='grid grid-cols-2 lg:grid-cols-5 mx-5 lg:mx-28 xl:mx-28 my-10 gap-10'>

                    <div className='skillImgDiv'>
                         <img src="https://cdn-icons-png.flaticon.com/512/888/888859.png" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://www.outsourcing-web.com/wp-content/uploads/2018/09/bootstrap-logo-230x191.png" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--6ebjy0LI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-2048x1822-f7kq7hho.png" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://www.appcoda.com/wp-content/uploads/2016/11/firebase_logo_shot.png" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" className='skillImg' alt="" />
                    </div>
                    <div className='skillImgDiv'>
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" className='skillImg' alt="" />
                    </div>
                     
                  </div>
            </section>

        </div>
    );
};

export default Skills;