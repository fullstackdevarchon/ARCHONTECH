import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 text-sm relative">
      {/* Newsletter */}
      <div className="bg-gray-100 border-y border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-2xl font-semibold">Join Our Newsletter</h4>
            <p className="mt-2 text-gray-600 max-w-lg">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form
              action="#"
              method="post"
              className="mt-6 w-full max-w-md flex shadow-md rounded overflow-hidden"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 outline-none border border-gray-200 focus:border-indigo-500 bg-white text-gray-700"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Top */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <a href="/" className="text-2xl font-semibold text-gray-900">
              FlexStart
            </a>
            <div className="mt-4 text-gray-600 space-y-1">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone:</strong>{" "}
                <span className="text-gray-800">+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span className="text-gray-800">info@example.com</span>
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-base font-bold mb-3">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  <span className="mr-1">›</span> Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  <span className="mr-1">›</span> About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  <span className="mr-1">›</span> Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  <span className="mr-1">›</span> Terms of service
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
                  <span className="mr-1">›</span> Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  <span className="mr-1">›</span> Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  <span className="mr-1">›</span> Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  <span className="mr-1">›</span> Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base font-bold mb-3">Follow Us</h4>
            <p className="text-gray-600 mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
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
          <strong className="px-1 text-gray-800">FlexStart</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="mt-2">
          Designed by{" "}
          <a
            href="https://bootstrapmade.com/"
            className="text-indigo-600 hover:underline"
          >
            BootstrapMade
          </a>{" "}
          Distributed by{" "}
          <a
            href="https://themewagon.com"
            className="text-indigo-600 hover:underline"
          >
            ThemeWagon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
