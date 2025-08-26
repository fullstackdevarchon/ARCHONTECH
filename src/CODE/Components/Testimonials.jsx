import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Star } from "lucide-react";

// ✅ Import images instead of using /public path
import Testimonial1 from "../../../public/assets/img/testimonials/testimonials-1.jpg";
import Testimonial2 from "../../../public/assets/img/testimonials/testimonials-2.jpg";
import Testimonial3 from "../../../public/assets/img/testimonials/testimonials-3.jpg";
import Testimonial4 from "../../../public/assets/img/testimonials/testimonials-4.jpg";
import Testimonial5 from "../../../public/assets/img/testimonials/testimonials-5.jpg";

const testimonials = [
  {
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...",
    name: "Saul Goodman",
    role: "CEO & Founder",
    image: Testimonial1,
  },
  {
    text: "Export tempor illum tamen malis malis eram quae irure esse labore...",
    name: "Sara Wilsson",
    role: "Designer",
    image: Testimonial2,
  },
  {
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum...",
    name: "Jena Karlis",
    role: "Store Owner",
    image: Testimonial3,
  },
  {
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos...",
    name: "Matt Brandon",
    role: "Freelancer",
    image: Testimonial4,
  },
  {
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam...",
    name: "John Larson",
    role: "Entrepreneur",
    image: Testimonial5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-500 mt-2">What they are saying about us</p>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000 }}
          speed={600}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-lg p-6 min-h-[320px] flex flex-col items-center text-center transition-transform rounded-2xl">
                {/* Stars */}
                <div className="flex mb-4 text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-yellow-400" />
                    ))}
                </div>

                {/* Text */}
                <p className="italic text-gray-600 mb-6">{t.text}</p>

                {/* Profile */}
                <div className="mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-100 mx-auto"
                  />
                  <h3 className="text-lg font-semibold mt-3">{t.name}</h3>
                  <h4 className="text-sm text-gray-500">{t.role}</h4>
                </div>
              </div>
              <div className="mt-16"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
