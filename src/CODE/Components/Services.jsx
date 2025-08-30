import React, { useState } from "react";
import {
  Activity,
  ShoppingCart,
  PenTool,
  Search,
  Share2,
  RefreshCw,
  Mail,
  CreditCard,
  MessageCircle,
  Monitor,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [flipped, setFlipped] = useState(null);

  const handleToggle = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  const services = [
    {
      gradient: "from-cyan-400 to-blue-500",
      icon: <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Website Design & Development",
      desc: "Custom, mobile-friendly websites that reflect your brand and convert visitors into customers.",
      more: "We use the latest technologies (React, Next.js, TailwindCSS) to build high-performance websites with smooth animations, fast loading times, and scalable architectures tailored for your business growth.",
    },
    {
      gradient: "from-orange-400 to-pink-500",
      icon: <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "E-Commerce Solutions",
      desc: "Start selling online with user-friendly, secure, and scalable online stores.",
      more: "Our e-commerce solutions are powered by Shopify, WooCommerce, or custom platforms with secure payment gateways, inventory management, and conversion-focused checkout flows.",
    },
    {
      gradient: "from-teal-400 to-green-500",
      icon: <PenTool className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Branding & Logo Design",
      desc: "Build a memorable identity with impactful logos and brand visuals.",
      more: "We craft visual identities that tell your story, using design psychology, unique typography, and color palettes to create timeless logos and brand guidelines.",
    },
    {
      gradient: "from-red-400 to-pink-600",
      icon: <Search className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "SEO Optimization",
      desc: "Rank higher on Google and attract more organic traffic to your website.",
      more: "Our SEO services include on-page optimization, keyword research, content strategies, and technical improvements to maximize your visibility across search engines.",
    },
    {
      gradient: "from-indigo-400 to-purple-600",
      icon: <Share2 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Social Media Marketing",
      desc: "Grow your online presence and engage your audience across platforms.",
      more: "We create and manage targeted social media campaigns that build engagement, boost brand awareness, and generate measurable ROI.",
    },
    {
      gradient: "from-pink-400 to-rose-500",
      icon: <RefreshCw className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Website Maintenance",
      desc: "Keep your site secure, updated, and running smoothly 24/7.",
      more: "Our maintenance packages include regular backups, security monitoring, performance optimizations, and continuous updates to keep your site reliable.",
    },
    {
      gradient: "from-purple-400 to-indigo-500",
      icon: <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Business Email Setup",
      desc: "Professional email addresses (like info@yourbusiness.com) to build trust and credibility.",
      more: "We integrate your business with Gmail Workspace or Microsoft 365, ensuring secure, professional communication with custom email domains.",
    },
    {
      gradient: "from-green-400 to-emerald-600",
      icon: <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Payment Gateway Integration",
      desc: "Enable safe and easy online payments for your services or products.",
      more: "Our integrations include PayPal, Stripe, Razorpay, and other gateways with seamless UX for global transactions and fraud prevention.",
    },
    {
      gradient: "from-yellow-400 to-orange-500",
      icon: <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "WhatsApp & Chat Integration",
      desc: "Instantly connect with your customers using real-time messaging tools.",
      more: "We integrate WhatsApp Business, live chat widgets, and AI chatbots to improve customer support and increase lead conversion.",
    },
    {
      gradient: "from-blue-400 to-sky-600",
      icon: <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "Landing Page Design",
      desc: "High-converting single-page sites tailored for promotions or campaigns.",
      more: "Our landing pages use high-level UI/UX principles with A/B tested layouts, compelling CTAs, and fast-loading designs that maximize conversions.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-700 via-gray-600 to-black text-white relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_70%)]"></div>

      {/* Section Title */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-md">
          Our Services
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Creative solutions to grow your business
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="perspective">
              <div
                className={`relative w-full min-h-[340px] h-[360px] sm:h-[380px] transition-transform duration-700 transform-style-preserve-3d ${
                  flipped === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-between text-center p-[2px] rounded-2xl shadow-xl backface-hidden group bg-gradient-to-br ${service.gradient} animate-borderGlow`}
                >
                  <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 h-full w-full flex flex-col items-center transition-all duration-300 group-hover:bg-gray-800/90">
                    <div
                      className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${service.gradient} shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 flex-grow text-sm sm:text-base line-clamp-3">
                      {service.desc}
                    </p>
                    <button
                      onClick={() => handleToggle(index)}
                      className="mt-3 inline-flex items-center text-white font-semibold hover:underline"
                    >
                      Read More <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-between text-center bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl rotate-y-180 backface-hidden animate-fadeIn">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base flex-grow animate-slideUp">
                    {service.more}
                  </p>
                  <button
                    onClick={() => handleToggle(index)}
                    className="mt-5 inline-flex items-center text-white font-semibold underline"
                  >
                    Show Less
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Styles for 3D Flip + Animations */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes borderGlow {
          0% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 20px rgba(255,255,255,0.25); }
          100% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
        }
        .animate-borderGlow {
          animation: borderGlow 3s infinite ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Services;
