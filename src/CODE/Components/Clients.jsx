import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Array with logos + names (✅ fixed image paths)
const clients = [
  { name: "Client 1", img: "/assets/img/clients/client-1.png" },
  { name: "Client 2", img: "/assets/img/clients/client-2.png" },
  { name: "Client 3", img: "/assets/img/clients/client-3.png" },
  { name: "Client 4", img: "/assets/img/clients/client-4.png" },
  { name: "Client 5", img: "/assets/img/clients/client-5.png" },
  { name: "Client 6", img: "/assets/img/clients/client-6.png" },
  { name: "Client 7", img: "/assets/img/clients/client-7.png" },
  { name: "Client 8", img: "/assets/img/clients/client-8.png" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-white">
      {/* Section Title */}
      <div className="container mx-auto px-6 lg:px-20 text-center mb-12">
        <span className="text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full uppercase tracking-wide">
          Clients
        </span>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          We work with best clients
        </h2>
      </div>

      {/* Swiper */}
      <div className="container mx-auto px-8 lg:px-28">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={700}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 3, spaceBetween: 30 },
            640: { slidesPerView: 4, spaceBetween: 40 },
            992: { slidesPerView: 6, spaceBetween: 50 },
          }}
          className="clients-swiper"
        >
          {clients.map((client, idx) => (
            <SwiperSlide
              key={idx}
              className="flex items-center justify-center"
            >
              <img
                src={client.img}
                alt={client.name}
                className="opacity-60 hover:opacity-100 transition duration-300 max-h-14"
              />
             <div className="mt-16"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
