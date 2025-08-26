import React from "react";
import {
  Activity,
  Radio, // ✅ instead of Broadcast
  Presentation,
  CircleDashed,
  Calendar,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      color: "cyan",
      border: "border-cyan-500",
      bg: "bg-cyan-100",
      text: "text-cyan-500",
      hover: "hover:bg-cyan-500",
      icon: <Activity className="w-10 h-10 text-cyan-500" />,
      title: "Nesciunt Mete",
      desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      color: "orange",
      border: "border-orange-500",
      bg: "bg-orange-100",
      text: "text-orange-500",
      hover: "hover:bg-orange-500",
      icon: <Radio className="w-10 h-10 text-orange-500" />, // ✅ Fixed
      title: "Eosle Commodi",
      desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    },
    {
      color: "teal",
      border: "border-teal-500",
      bg: "bg-teal-100",
      text: "text-teal-500",
      hover: "hover:bg-teal-500",
      icon: <Presentation className="w-10 h-10 text-teal-500" />,
      title: "Ledo Markt",
      desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    },
    {
      color: "red",
      border: "border-red-500",
      bg: "bg-red-100",
      text: "text-red-500",
      hover: "hover:bg-red-500",
      icon: <CircleDashed className="w-10 h-10 text-red-500" />,
      title: "Asperiores Commodi",
      desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    },
    {
      color: "indigo",
      border: "border-indigo-500",
      bg: "bg-indigo-100",
      text: "text-indigo-500",
      hover: "hover:bg-indigo-500",
      icon: <Calendar className="w-10 h-10 text-indigo-500" />,
      title: "Velit Doloremque",
      desc: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    },
    {
      color: "pink",
      border: "border-pink-500",
      bg: "bg-pink-100",
      text: "text-pink-500",
      hover: "hover:bg-pink-500",
      icon: <MessageSquare className="w-10 h-10 text-pink-500" />,
      title: "Dolori Architecto",
      desc: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Services</h2>
        <p className="text-gray-600">Check Our Services</p>
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group bg-white rounded-lg shadow-lg p-8 text-center border-b-4
                ${service.border} transition duration-300 ${service.hover}
              `}
            >
              {/* Icon */}
              <div
                className={`
                  inline-flex items-center justify-center mb-6 p-4 rounded-md
                  ${service.bg} ${service.text}
                  group-hover:bg-white transition duration-300
                `}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-4 group-hover:text-white"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 group-hover:text-white">
                {service.desc}
              </p>

              {/* Read More */}
              <a
                href="#"
                className={`
                  inline-flex items-center font-semibold ${service.text}
                  group-hover:text-white transition duration-300
                `}
              >
                Read More <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
