import React from "react";
import { Box, Send, Plane, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "0",
      color: "text-emerald-500",
      icon: <Box className="w-12 h-12 text-emerald-500" />,
      features: [
        "Aida dere",
        "Nec feugiat nisl",
        "Nulla at volutpat dola",
        { text: "Pharetra massa", available: false },
        { text: "Massa ultricies mi", available: false },
      ],
    },
    {
      name: "Starter Plan",
      price: "19",
      color: "text-cyan-500",
      featured: true,
      icon: <Send className="w-12 h-12 text-cyan-500" />,
      features: [
        "Aida dere",
        "Nec feugiat nisl",
        "Nulla at volutpat dola",
        "Pharetra massa",
        { text: "Massa ultricies mi", available: false },
      ],
    },
    {
      name: "Business Plan",
      price: "29",
      color: "text-orange-500",
      icon: <Plane className="w-12 h-12 text-orange-500" />,
      features: [
        "Aida dere",
        "Nec feugiat nisl",
        "Nulla at volutpat dola",
        "Pharetra massa",
        "Massa ultricies mi",
      ],
    },
    {
      name: "Ultimate Plan",
      price: "49",
      color: "text-blue-600",
      icon: <Rocket className="w-12 h-12 text-blue-600" />,
      features: [
        "Aida dere",
        "Nec feugiat nisl",
        "Nulla at volutpat dola",
        "Pharetra massa",
        "Massa ultricies mi",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Pricing</h2>
        <p className="text-gray-600">Check Our Affordable Pricing</p>
      </div>

      {/* Pricing Grid */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative bg-white shadow-lg rounded-lg text-center p-8 transition transform hover:scale-105 overflow-hidden"
            >
              {/* Featured Ribbon */}
              {plan.featured && (
                <div className="absolute top-0 right-0">
                  <span className="bg-cyan-500 text-white text-xs font-semibold px-12 py-1 transform rotate-45 origin-top-right translate-x-8 -translate-y-4 shadow-md">
                    Featured
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-lg font-bold mb-4 ${plan.color}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-4xl font-bold text-gray-800 mb-4">
                <sup className="text-lg align-super">$</sup>
                {plan.price}
                <span className="text-gray-500 text-base font-medium"> / mo</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">{plan.icon}</div>

              {/* Features */}
              <ul className="mb-6 text-gray-600 space-y-2">
                {plan.features.map((feature, i) =>
                  typeof feature === "string" ? (
                    <li key={i}>{feature}</li>
                  ) : (
                    <li key={i} className="text-gray-400 line-through">
                      {feature.text}
                    </li>
                  )
                )}
              </ul>

              {/* Button */}
              <a
                href="#"
                className="inline-block px-6 py-2 rounded-full border border-indigo-500 text-indigo-500 font-semibold transition hover:bg-indigo-500 hover:text-white"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
