import React from "react";
import heroImg from "/assets/img/hero-img.png"; // image from public/assets/img

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center pt-24 pb-20 
                 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 
                 overflow-hidden"
    >
      {/* Floating Decorative Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-indigo-300/30 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold leading-snug mb-6 text-white tracking-tight">
              We provide{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                modern solutions
              </span>{" "}
              to grow your business 🚀
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A passionate team of designers & developers creating{" "}
              <span className="font-semibold text-white">
                cutting-edge websites
              </span>{" "}
              and digital solutions to scale your business online.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-7 py-3 
                           rounded-lg shadow-lg text-base font-semibold 
                           hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 
                           flex items-center justify-center"
              >
                Get Started <i className="bi bi-arrow-right ml-2"></i>
              </a>
              <a
                href="#features"
                className="border border-cyan-300 text-cyan-300 px-7 py-3 
                           rounded-lg text-base font-semibold hover:bg-white/10 
                           transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full max-w-md mx-auto animate-float drop-shadow-2xl"
            />

            {/* Glow Behind Image */}
            <div
              className="absolute -z-10 top-10 left-1/2 -translate-x-1/2 
                            w-80 h-80 bg-cyan-400/40 blur-3xl rounded-full animate-pulse"
            ></div>
          </div>
        </div>
      </div>

      {/* Custom Animation Style */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
