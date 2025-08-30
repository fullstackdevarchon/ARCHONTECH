import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold tracking-wide">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-gray-200">
            We’re here to answer your questions and help you get started.
          </p>
        </div>

        {/* Two Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Contact Info (All 4 cards stacked neatly) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300">
              <MapPin className="w-10 h-10 text-pink-300 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-gray-200">Tirupur, Tamil Nadu</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300">
              <Phone className="w-10 h-10 text-pink-300 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Call Us</h3>
              <p className="text-gray-200">+91 80563 94297</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300">
              <Mail className="w-10 h-10 text-pink-300 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Email Us</h3>
              <p className="text-gray-200">founder.archon@gmail.com</p>
              <p className="text-gray-200">cofounder.archon@gmail.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300">
              <Clock className="w-10 h-10 text-pink-300 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Open Hours</h3>
              <p className="text-gray-200">Monday - Friday</p>
              <p className="text-gray-200">9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/20 text-white placeholder-gray-300 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/20 text-white placeholder-gray-300 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-white/20 text-white placeholder-gray-300 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="w-full bg-white/20 text-white placeholder-gray-300 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-pink-400/50 transform hover:-translate-y-1 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
