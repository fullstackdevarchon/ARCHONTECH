import React, { useState } from "react";
import { ZoomIn, Link } from "lucide-react";

// Import images from src/assets/img/portfolio
import app1 from "../../../public/assets/img/portfolio/app-1.jpg";
import app2 from "../../../public/assets/img/portfolio/app-2.jpg";
import app3 from "../../../public/assets/img/portfolio/app-3.jpg";

import product1 from "../../../public/assets/img/portfolio/product-1.jpg";
import product2 from "../../../public/assets/img/portfolio/product-2.jpg";
import product3 from "../../../public/assets/img/portfolio/product-3.jpg";

import branding1 from "../../../public/assets/img/portfolio/branding-1.jpg";
import branding2 from "../../../public/assets/img/portfolio/branding-2.jpg";
import branding3 from "../../../public/assets/img/portfolio/branding-3.jpg";

import books1 from "../../../public/assets/img/portfolio/books-1.jpg";
import books2 from "../../../public/assets/img/portfolio/books-2.jpg";
import books3 from "../../../public/assets/img/portfolio/books-3.jpg";

const portfolioItems = [
  { title: "App 1", category: "App", filter: "app", image: app1 },
  { title: "Product 1", category: "Product", filter: "product", image: product1 },
  { title: "Branding 1", category: "Branding", filter: "branding", image: branding1 },
  { title: "Books 1", category: "Books", filter: "books", image: books1 },
  { title: "App 2", category: "App", filter: "app", image: app2 },
  { title: "Product 2", category: "Product", filter: "product", image: product2 },
  { title: "Branding 2", category: "Branding", filter: "branding", image: branding2 },
  { title: "Books 2", category: "Books", filter: "books", image: books2 },
  { title: "App 3", category: "App", filter: "app", image: app3 },
  { title: "Product 3", category: "Product", filter: "product", image: product3 },
  { title: "Branding 3", category: "Branding", filter: "branding", image: branding3 },
  { title: "Books 3", category: "Books", filter: "books", image: books3 },
];

const categories = ["All", "App", "Product", "Branding", "Books"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter.toLowerCase());

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Portfolio</h2>
        <p className="text-gray-600">Check our latest work</p>
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        {/* Filters */}
        <ul className="flex flex-wrap justify-center mb-10 space-x-4">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`cursor-pointer text-lg font-medium transition ${
                activeFilter === cat ? "text-indigo-600" : "text-gray-700 hover:text-indigo-500"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Portfolio Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
                <h4 className="bg-indigo-600 text-white text-sm px-3 py-1 rounded mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-200 text-base">{item.category}</p>
                {/* Action buttons */}
                <div className="flex space-x-4 mt-4">
                  <a href={item.image} className="text-white text-2xl hover:text-indigo-400 transition">
                    <ZoomIn />
                  </a>
                  <a href="/portfolio-details" className="text-white text-3xl hover:text-indigo-400 transition">
                    <Link />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
