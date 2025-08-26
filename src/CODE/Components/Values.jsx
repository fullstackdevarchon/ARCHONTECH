import React from "react";
import value1 from "../../../public/assets/img/values-1.png";
import value2 from "../../../public/assets/img/values-2.png";
import value3 from "../../../public/assets/img/values-3.png";

const Values = () => {
  const values = [
    {
      img: value1,
      title: " Transparency",
      desc: "Clear communication and honest pricing.",
    },
    {
      img: value2,
      title: "Creativity",
      desc: "Custom design that fits your brand.",
    },
    {
      img: value3,
      title: "Growth-Oriented",
      desc: "Solutions that help your business expand.",
    },
  ];

  return (
    <section id="values" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
        <p className="text-gray-600 mt-2">What we value most</p>
      </div>

      {/* Values Grid */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((val, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center transition duration-300 hover:shadow-xl"
            >
              <img
                src={val.img}
                alt={val.title}
                className="mx-auto mb-6 transition-transform duration-500 transform scale-110 hover:scale-100"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {val.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
