import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaClipboardList,
  FaUsers,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-700 text-sm relative">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-2xl font-semibold">Join Our Newsletter</h4>
            <p className="mt-2 text-indigo-100 max-w-lg">
              Subscribe to our newsletter and receive the latest updates about
              ARCHON TECH’s products and services!
            </p>
            <form
              action="#"
              method="post"
              className="mt-6 w-full max-w-md flex shadow-lg rounded overflow-hidden"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 outline-none border-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-700"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 text-white font-medium hover:bg-pink-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Top */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <a
              href="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              ARCHON TECH
            </a>
            <div className="mt-4 text-gray-600 space-y-1">
              {/* <p>Tirupur, Tamil Nadu</p> */}
                <p className="mt-3">
                <strong>Location</strong>{" "}
                <span className="text-gray-800">Tirupur, Tamil Nadu</span>
              </p>
              <p className="mt-3">
                <strong>Phone:</strong>{" "}
                <span className="text-gray-800">+91 80563 94297</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span className="text-gray-800">
                  founder.archon@gmail.com <br />
                  cofounder.archon@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-base font-bold mb-3">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 flex items-center gap-2"
                >
                  <FaHome /> Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-600 flex items-center gap-2"
                >
                  <FaInfoCircle /> About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-indigo-600 flex items-center gap-2"
                >
                  <FaServicestack /> Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-indigo-600 flex items-center gap-2"
                >
                  <FaClipboardList /> Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-indigo-600 flex items-center gap-2"
                >
                  <FaUsers /> Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-600 flex items-center gap-2"
                >
                  <FaPhoneAlt /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-3">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  › Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  › Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  › Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  › Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base font-bold mb-3">Follow Us</h4>
            <p className="text-gray-600 mb-4">
              Stay connected with ARCHON TECH on social media.
            </p>
            <div className="flex space-x-3">
              {/* <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a> */}
              <a
                href="https://www.instagram.com/archon_tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/archon-tech-66a512380"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 text-gray-800">ARCHON TECH</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="mt-2">
          Designed with ❤️ by{" "}
          <span className="text-indigo-600 font-semibold">ARCHON TECH</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
