// src/CODE/Components/About.jsx
import React from "react";
import aboutImg from "../../../public/assets/img/about.jpg"; // adjust path if needed

const About = () => {
  return (
    <section id="about" className="py-12 bg-white font-sans">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-5">
            <div>
              <h3 className="text-indigo-600 font-medium uppercase tracking-wide text-sm">
               
              </h3>
              <h2 className="text-1xl lg:text-1xl font-semibold text-gray-800 mt-2 leading-snug">
                At Archon Tech, we are passionate about helping businesses succeed in the digital world. Founded with a vision to make high-quality web solutions accessible to startups and local businesses, we specialize in creating custom websites that combine stunning design, smart features, and real functionality.

              </h2>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                We understand that your website is more than just a digital space — it's your brand's first impression, your marketing tool, and your customer service hub. That’s why we take a strategic, detail-oriented approach to every project, ensuring it reflects your unique identity and business goals.
              </p>
            </div>

            <div className="text-left">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow hover:bg-indigo-700 transition-all"
              >
                <span>Read More</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 
                    111.414-1.414l5 5a1 1 0 010 1.414l-5 
                    5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl shadow-lg max-w-full h-auto animate-slow-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
