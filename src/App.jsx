import React, { useEffect } from "react";
import Layout from "./CODE/Layout.jsx";

// Main Sections
import Hero from "./CODE/Components/Hero.jsx";
import About from "./CODE/Components/About.jsx";
import Values from "./CODE/Components/Values.jsx";
import Stats from "./CODE/Components/Stats.jsx";
import Features from "./CODE/Components/Features.jsx";
import Services from "./CODE/Components/Services.jsx";
import Pricing from "./CODE/Components/Pricing.jsx";
import FAQ from "./CODE/Components/Faqs.jsx";
import Portfolio from "./CODE/Components/PortfolioItems.jsx";
import Testimonials from "./CODE/Components/Testimonials.jsx";
import Team from "./CODE/Components/Team.jsx";
import Clients from "./CODE/Components/Clients.jsx";
import Contact from "./CODE/Components/Contact.jsx";

function App() {
  useEffect(() => {
    document.title = "ARCHON_TECH"; // Set browser tab title
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Values Section */}
      <section id="values">
        <Values />
      </section>

      {/* Stats Section */}
      <section id="stats">
        <Stats />
      </section>

      {/* Features Section */}
      <section id="features">
        <Features />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Pricing Section */}
      {/* <section id="pricing">
        <Pricing />
      </section> */}

      {/* FAQ Section
      <section id="faq">
        <FAQ />
      </section> */}

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Team Section */}
      <section id="team">
        <Team />
      </section>

      {/* Clients Section */}
      {/* <section id="clients">
        <Clients />
      </section> */}

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;
