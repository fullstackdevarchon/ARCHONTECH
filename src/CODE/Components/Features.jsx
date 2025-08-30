import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Smartphone,
  ShoppingCart,
  Search,
  PenTool,
  Shield,
  Wrench,
  FileText,
  MessageCircle,
  BarChart3,
} from "lucide-react";

const Features = () => {
  // Core Features (10 unique topics)
  const coreFeatures = [
    {
      icon: Layout,
      title: "Custom Website Design",
      desc: "Tailored designs that perfectly match your brand identity and vision.",
    },
    {
      icon: Smartphone,
      title: "Responsive & Mobile-Friendly",
      desc: "Seamless performance and visuals across all devices and screen sizes.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      desc: "Secure online stores with integrated payment gateways.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      desc: "Built-in SEO strategies to improve visibility and ranking.",
    },
    {
      icon: PenTool,
      title: "Branding & UI/UX Design",
      desc: "Logos, colors, and interfaces designed to attract and engage users.",
    },
    {
      icon: Shield,
      title: "Fast & Secure Websites",
      desc: "Optimized for high performance, cybersecurity, and reliability.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      desc: "Ongoing updates, bug fixes, and full technical support.",
    },
    {
      icon: FileText,
      title: "CMS Platforms",
      desc: "Easy-to-use WordPress and CMS solutions for effortless content control.",
    },
    {
      icon: MessageCircle,
      title: "Social Media Integration",
      desc: "WhatsApp and social platforms linked directly for customer engagement.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      desc: "Track your website performance with in-depth insights and reports.",
    },
  ];

  return (
    <>
      {/* Features Section */}
      <section
        id="features"
        className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-indigo-600 overflow-hidden"
      >
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-16 right-1/3 w-64 h-64 bg-green-400/20 rounded-full blur-2xl animate-bounce"></div>

        <div className="relative container mx-auto px-6 lg:px-20">
          {/* Title */}
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-extrabold drop-shadow-lg">
              Core Features of{" "}
              <span className="text-pink-400">Archon Tech</span>
            </h2>
            <p className="mt-3 text-lg text-gray-200">
              Discover 10 powerful features designed to grow your business online
            </p>
          </div>

          {/* 4-Column Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col h-full bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Icon with animation */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-10 h-10 text-indigo-600" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-800 mt-4">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mt-2 flex-grow">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
