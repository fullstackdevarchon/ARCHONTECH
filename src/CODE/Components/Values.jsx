import React from "react";
import value1 from "../../../public/assets/img/values-1.png";
import value2 from "../../../public/assets/img/values-2.png";
import value3 from "../../../public/assets/img/values-3.png";

const Values = () => {
  const values = [
    {
      img: value1,
      title: "Transparency",
      desc: "Clear communication and honest pricing.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      img: value2,
      title: "Creativity",
      desc: "Custom design that fits your brand.",
      color: "from-pink-500 to-red-500",
    },
    {
      img: value3,
      title: "Growth-Oriented",
      desc: "Solutions that help your business expand.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">✨ Our Values</h2>
        <p className="text-gray-600 text-lg">
          The principles that define our culture & guide every project
        </p>
      </div>

      {/* Values Grid */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {values.map((val, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg p-10 text-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105`}
            >
              {/* Icon Container */}
              <div
                className={`mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r ${val.color} mb-6 shadow-md group-hover:scale-110 transform transition duration-500 animate-bounce`}
              >
                <img
                  src={val.img}
                  alt={val.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {val.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {val.desc}
              </p>

              {/* Hover underline effect */}
              <div className="mt-5 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-20 mx-auto transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
