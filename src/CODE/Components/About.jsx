// src/CODE/Components/About.jsx
import React from "react";
import aboutImg from "../../../public/assets/img/about.jpg"; // adjust path if needed

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 font-sans overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left animate-fadeIn">
            <div>
              <h3 className="text-indigo-600 font-medium uppercase tracking-widest text-sm mb-2">
                Who We Are
              </h3>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 leading-snug relative inline-block">
                At{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Archon Tech
                </span>
                , we help businesses shine online.
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
              </h2>
              <p className="text-gray-600 mt-4 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                We understand that your website is more than just a digital
                space — it's your brand's{" "}
                <span className="text-indigo-600 font-semibold">
                  first impression
                </span>
                , your{" "}
                <span className="text-indigo-600 font-semibold">
                  marketing tool
                </span>
                , and your{" "}
                <span className="text-indigo-600 font-semibold">
                  customer service hub
                </span>
                . That’s why we take a strategic, detail-oriented approach to
                ensure it reflects your{" "}
                <span className="text-indigo-600 font-semibold">
                  unique identity
                </span>{" "}
                and goals.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 
                           bg-gradient-to-r from-indigo-600 to-cyan-500 
                           text-white text-sm font-medium rounded-lg shadow-lg 
                           hover:shadow-xl hover:scale-105 transform transition-all duration-300
                           animate-glow"
              >
                <span>Read More</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 
                    110-2h9.586l-3.293-3.293a1 1 0 
                    111.414-1.414l5 5a1 1 0 
                    010 1.414l-5 5a1 1 0 
                    01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end relative animate-fadeInUp">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl shadow-2xl max-w-md h-auto animate-slow-bounce hover:scale-105 transition-transform duration-500"
            />
            {/* Glow effect behind image */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-indigo-400/30 blur-3xl rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
