import React from "react";
import CountUp from "react-countup";
import { Smile, BookText, Headphones, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Smile className="w-12 h-12 text-blue-600" />,
      end: 232,
      label: "Happy Clients",
    },
    {
      icon: <BookText className="w-12 h-12 text-orange-500" />,
      end: 521,
      label: "Projects",
    },
    {
      icon: <Headphones className="w-12 h-12 text-green-600" />,
      end: 1463,
      label: "Hours Of Support",
    },
    {
      icon: <Users className="w-12 h-12 text-pink-600" />,
      end: 15,
      label: "Hard Workers",
    },
  ];

  return (
    <section id="stats" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-xl p-6 rounded-lg"
            >
              <div className="flex-shrink-0 mr-4">{stat.icon}</div>
              <div>
                <span className="block text-3xl font-bold text-gray-800">
                  <CountUp start={0} end={stat.end} duration={2} />
                </span>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
