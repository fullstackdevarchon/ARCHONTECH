import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // Track scroll position for header + scroll-to-top + scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      setShowScrollTop(window.scrollY > 100);

      // Scrollspy: detect active section
      const sections = document.querySelectorAll("section[id]");
      const position = window.scrollY + 200;
      sections.forEach((section) => {
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`relative ${scrolled ? "scrolled" : ""}`}>
      {/* Header (external component) */}
      <Header activeSection={activeSection} scrolled={scrolled} />

      {/* Page Content */}
      <main className="pt-20">{children}</main>

      {/* Footer (external component) */}
      <Footer />

      {/* Scroll-to-Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 w-10 h-10 flex items-center justify-center rounded bg-indigo-600 text-white text-xl shadow-lg hover:bg-indigo-700 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Layout;
