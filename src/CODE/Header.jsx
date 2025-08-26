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
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          {/* ✅ Use public/assets/img/logo.png directly */}
          <img
            src="/assets/img/logo.png"
            alt="Logo"
            className="h-10 drop-shadow-md"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            ARCHON TECH
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center text-gray-700 font-medium">
          <Link
            to="hero"
            smooth
            duration={600}
            offset={-80}
            className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
          >
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link
            to="about"
            smooth
            duration={600}
            offset={-80}
            className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
          >
            <Info className="w-4 h-4" /> About
          </Link>
          <Link
            to="services"
            smooth
            duration={600}
            offset={-80}
            className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
          >
            <Briefcase className="w-4 h-4" /> Services
          </Link>
          <Link
            to="portfolio"
            smooth
            duration={600}
            offset={-80}
            className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
          >
            <Layers className="w-4 h-4" /> Portfolio
          </Link>
          <Link
            to="team"
            smooth
            duration={600}
            offset={-80}
            className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
          >
            <Users className="w-4 h-4" /> Team
          </Link>
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
          >
            <Phone className="w-4 h-4" /> Contact
          </Link>

          <Link
            to="about"
            smooth
            duration={600}
            offset={-80}
            className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:from-blue-700 hover:to-indigo-700 cursor-pointer"
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
        <div className="md:hidden bg-white border-t shadow">
          <nav className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
            <Link
              to="hero"
              smooth
              duration={600}
              offset={-80}
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-blue-600 cursor-pointer"
            >
              <Home className="w-5 h-5" /> Home
            </Link>
            <Link
              to="about"
              smooth
              duration={600}
              offset={-80}
              onClick={handleLinkClick}
              className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
            >
              <Info className="w-5 h-5" /> About
            </Link>
            <Link
              to="services"
              smooth
              duration={600}
              offset={-80}
              onClick={handleLinkClick}
              className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
            >
              <Briefcase className="w-5 h-5" /> Services
            </Link>
            <Link
              to="portfolio"
              smooth
              duration={600}
              offset={-80}
              onClick={handleLinkClick}
              className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
            >
              <Layers className="w-5 h-5" /> Portfolio
            </Link>
            <Link
              to="team"
              smooth
              duration={600}
              offset={-80}
              onClick={handleLinkClick}
              className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
            >
              <Users className="w-5 h-5" /> Team
            </Link>
            <a
              href="blog.html"
              onClick={handleLinkClick}
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <ChevronDown className="w-5 h-5" /> Blog
            </a>
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              onClick={handleLinkClick}
              className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
            >
              <Phone className="w-5 h-5" /> Contact
            </Link>
            <Link
              to="about"
              smooth
              duration={600}
              offset={-80}
              onClick={handleLinkClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-center hover:from-blue-700 hover:to-indigo-700 mt-2 cursor-pointer"
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
