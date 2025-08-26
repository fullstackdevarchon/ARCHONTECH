import React from "react";
import heroBg from "../../../public/assets/img/hero-bg.png"; // adjust path if needed
import heroImg from "../../../public/assets/img/hero-img.png"; // adjust path if needed

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center pt-20 pb-14 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-5 text-gray-900 tracking-tight">
              We offer <span className="text-blue-600">modern solutions</span>{" "}
              <br /> for growing your business
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We are a team of talented designers making websites 
              <span className="font-semibold text-gray-800">
                
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg shadow-lg text-base font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started <i className="bi bi-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full max-w-md mx-auto animate-slow-bounce drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Hero;
