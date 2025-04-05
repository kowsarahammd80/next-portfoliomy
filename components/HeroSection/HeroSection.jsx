"use client";

import React from "react";
import "./HeroSection.css";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, facebook } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div
      className="flex justify-center items-center pt-10 lg:pt-0 xl:pt-0 heroBg"
      id="heroSection"
    >
      <section className="mx-5 lg:mx-28 xl:mx-28 md:mx-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 h-screen">
          <div
            className="flex justify-center items-center py-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-offset="200"
            data-aos-duration="3000"
          >
            <div className="text-design">
              {/* <p className="text-lg font-semibold text-design salamText">
                Assalamu Alaikum
              </p> */}
              <h1 className="text-xl lg:text-4xl xl:text-4xl md:text-3xl font-semibold mb-2 lg:mb-4 xl:mb-4 md:mb-3 selfTExt">
                <span className="nameText">Md Kowsar Ahamed</span>
              </h1>
              {/* <p className="text-xl xl:text-4xl lg:text-4xl md:text-3xl typeText font-semibold my-2 lg:my-5">
                <Typewriter
                  words={[
                    "WEB DEVELOPER",
                    "FRONT-END DEVELOPER",
                    "REACT JS DEVELOPER",
                  ]}
                  loop={1000}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p> */}

              <p className="text-2xl lg:text-6xl xl:text-6xl md:text-3xl nextLevelText font-semibold pb-2 lg:pb-4 xl:pb-4 mb:pb-3">
                Mernt Stack Web Developer.
              </p>

              <p className="text-xl leading-1.5 text-primary-color-light dark:text-body-color max-w-540px w-full lg:w-9/12 xl:w-9/12 pt-1 lg:pt-4 xl:pt-4 md:pt-3 herPera">
                I love to Develop interesting and unique design. I also like to
                challenge myself to learn new things and I crave for new
                experiences and challenges.
              </p>

              {/* <div className="my-8 xl:my10 lg:my-10 md:my-10">
                <Link
                  to="work"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="me-5 heroContact-button"
                >
                  My Work
                </Link>
                <Link to="contact" className="heroContact-button">
                  Hire Me
                </Link>
              </div> */}

              {/* <div className="text-4xl lg:text-5xl xl:text-5xl mt-6 cursor-pointer">
                <a href="https://github.com/kowsarahammd80">
                  <span className="me-5 socialLink">
                    <i class="fa-brands fa-github iconShdow"></i>
                  </span>
                </a>
                <a href="https://www.facebook.com/KowsarAhamedShuvo/">
                  <span className="me-5 socialLink">
                    <i class="fa-brands fa-facebook iconShdow"></i>
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/md-kowsar-ahamed-b425a2257">
                  <span className="me-5 socialLink">
                    <i class="fa-brands fa-linkedin iconShdow"></i>
                  </span>
                </a>
                <a href="https://www.instagram.com/loading_shuvo/">
                  <span className="me-5 socialLink">
                    <i class="fa-brands fa-instagram iconShdow"></i>
                  </span>
                </a>
                <a href="https://wa.me/+8801760075031">
                  <span className="socialLink">
                    <i class="fa-brands fa-whatsapp iconShdow"></i>
                  </span>
                </a>
              </div> */}
              <div>
                <a href="https://drive.google.com/uc?export=download&id=1XzegnbXfOrsdEKwZr9YoRGUPIwGOaXBq">
                <button className="downloadCVButton my-5 lg:my-8 xl:my-8 md:my-5 px-8 py-2 rounded-full">
                  Download CV
                </button>
                </a>
                
                <br className="block lg:hidden xl:hidden" />
                <a href="https://github.com/kowsarahammd80" target="_blank">
                  <button>
                    {" "}
                    <span className="ms-0 lg:ms-5 xl:ms-5 me-5 socialLink" target="_blank">
                      <i class="fa-brands fa-github"></i>
                    </span>
                  </button>
                </a>
                <a href="https://www.facebook.com/KowsarAhamedShuvo/">
                  <button>
                    {" "}
                    <span className="me-5 socialLink">
                      <i class="fa-brands fa-facebook "></i>
                    </span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/md-kowsar-ahamed-b425a2257" target="_blank">
                  <button>
                    {" "}
                    <span className="me-5 socialLink">
                      <i class="fa-brands fa-linkedin"></i>
                    </span>
                  </button>
                </a>
                <a href="https://www.instagram.com/loading_shuvo/" target="_blank">
                  <button>
                    {" "}
                    <span className="me-5 socialLink">
                      <i class="fa-brands fa-instagram"></i>
                    </span>
                  </button>
                </a>
                {/* <button>
                    {" "}
                    <span className="me-5 socialLink">
                    <i class="fa-brands fa-whatsapp "/>
                    </span>
                  </button> */}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start lg:items-center mx-5 lg:mx-28 xl:mx-28 md:mx-16">
            <div
              className="iamgeDiv"
              data-aos="fade-down"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="100"
              data-aos-duration="800"
            >
              <img
                src="https://i.ibb.co/XzvzSFB/Untitled-design-6.png"
                className="heroImg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
