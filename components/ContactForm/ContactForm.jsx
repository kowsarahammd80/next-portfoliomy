"use client";

import React, { useRef } from "react";
import "./ContactForm.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_scjjj1l",
        "template_htfygta",
        form.current,
        "kN5zFWBNsx06iTEHN"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const phoneNumber = "+8801760075031"; // Replace with your number
  const email = "kowsarahammed80@gmail.com"; // Replace with your email

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div id="contact">
      <section className="my-10 lg:my-16 mx-5 lg:mx-28 xl:mx-28 md:mx-16">
        <div className="font-semibold pb-5 lg:pb-10 xl:pb-10 text-2xl lg:text-5xl xl:text-5xl aboutMeText ">
          <h1
            className=""
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            Get In Touch
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:flex-row xl:flex-row md:flex-row w-full my-5 lg:my-10 gap-4">
          <form
            action=""
            className="formdiv w-full p-5 lg:p-10 xl:p-10 md:p-8 shadow-lg"
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <div className="inputDiv w-full my-3">
              <input
                type="text"
                name="from_name"
                className="inputfild w-full p-2"
                placeholder="Full Name"
              />
            </div>
            <div className="inputDiv my-3">
              <input
                type="email"
                name="from_email"
                className="inputfild w-full p-2"
                placeholder="Email Address"
              />
            </div>
            <div className="inputDiv my-3">
              <input
                type="text"
                name="from_number"
                className="inputfild w-full p-2"
                placeholder="Number"
              />
            </div>
            <div className="textDiv my-3">
              <textarea
                name="from_service"
                id=""
                className="w-full h-40 textfild p-2"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="get-started my-2 font-semibold">
              Send Message
            </button>
          </form>

          <div className="mx-0 lg:mx-16 flex items-center w-full">
            <div className="w-full">
              <div
                onClick={handleEmail}
                className=" contactDiv p-3 flex items-center w-full my-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <span className="contactIcon ms-1 me-2 lg:ms-5 lg:me-5">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span className="text-sm lg:text-xl p-1 contactText">
                  kowsarahammed80@gmail.com
                </span>
              </div>
              <div
               
                className=" contactDiv p-3 flex items-center w-full my-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-offset="100"
                data-aos-duration="1000"
                onClick={handleCall}
              >
                <span className="contactIcon ms-1 lg:ms-5 md:ms-0 me-2 lg:me-5 md:me-2">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span className="text-sm lg:text-xl p-1 contactText">
                  +8801760075031
                </span>
              </div>
              <div
                className=" contactDiv p-3 flex items-center w-full"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-offset="100"
                data-aos-duration="1000"
              >
                <span className="contactIcon ms-1 lg:ms-5 md:ms-0 me-2 lg:me-5">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <span className="text-md lg:text-xl contactText">
                  jahurul islam city Aftab Nagar, Badda, Dhakka-1212
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
