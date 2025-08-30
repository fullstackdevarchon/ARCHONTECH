import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Users,
  Phone,
  Layers,
} from "lucide-react";
import { Link } from "react-scroll";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 group">
          <img
            src="/assets/img/logo.png"
            alt="Logo"
            className="h-10 drop-shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 group-hover:tracking-widest">
            ARCHON TECH
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center text-gray-700 font-medium">
          {[
            { id: "hero", label: "Home", Icon: Home },
            { id: "about", label: "About", Icon: Info },
            { id: "services", label: "Services", Icon: Briefcase },
            { id: "portfolio", label: "Portfolio", Icon: Layers },
            { id: "team", label: "Team", Icon: Users },
            { id: "contact", label: "Contact", Icon: Phone },
          ].map(({ id, label, Icon }) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={600}
              offset={-80}
              className="flex items-center gap-2 cursor-pointer relative group"
            >
              <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-blue-600" />
              <span className="transition-all duration-300 group-hover:text-blue-600 group-hover:font-semibold">
                {label}
              </span>
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            to="about"
            smooth
            duration={600}
            offset={-80}
            className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 cursor-pointer"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-slideDown">
          <nav className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
            {[
              { id: "hero", label: "Home", Icon: Home },
              { id: "about", label: "About", Icon: Info },
              { id: "services", label: "Services", Icon: Briefcase },
              { id: "portfolio", label: "Portfolio", Icon: Layers },
              { id: "team", label: "Team", Icon: Users },
              { id: "contact", label: "Contact", Icon: Phone },
            ].map(({ id, label, Icon }) => (
              <Link
                key={id}
                to={id}
                smooth
                duration={600}
                offset={-80}
                onClick={handleLinkClick}
                className="flex items-center gap-2 cursor-pointer relative group hover:text-blue-600"
              >
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                <span className="transition-all duration-300 group-hover:text-blue-600 group-hover:font-semibold">
                  {label}
                </span>
              </Link>
            ))}

            <a
              href="blog.html"
              onClick={handleLinkClick}
              className="flex items-center gap-2 hover:text-blue-600 transition-transform duration-300 hover:translate-x-2"
            >
              <ChevronDown className="w-5 h-5" /> Blog
            </a>

            <Link
              to="about"
              smooth
              duration={600}
              offset={-80}
              onClick={handleLinkClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 hover:scale-105 shadow-md hover:shadow-xl transition-all duration-300 mt-2 cursor-pointer"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
