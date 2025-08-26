import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="container mx-auto px-6 lg:px-20 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="text-gray-600">Contact Us</p>
      </div>

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="mx-auto text-indigo-600 w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4">Address</h3>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Phone className="mx-auto text-indigo-600 w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4">Call Us</h3>
            <p>+1 5589 55488 55</p>
            <p>+1 6678 254445 41</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Mail className="mx-auto text-indigo-600 w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4">Email Us</h3>
            <p>info@example.com</p>
            <p>contact@example.com</p>
          </div>

          {/* Hours */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="mx-auto text-indigo-600 w-10 h-10" />
            <h3 className="text-lg font-semibold mt-4">Open Hours</h3>
            <p>Monday - Friday</p>
            <p>9:00AM - 05:00PM</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
