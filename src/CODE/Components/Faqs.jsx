import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer:
      "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">F.A.Q</h2>
        <p className="text-gray-600">Frequently Asked Questions</p>
      </div>

      {/* FAQ Grid */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border-b border-gray-200 pb-4 cursor-pointer transition`}
              onClick={() => toggleFAQ(idx)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3
                  className={`font-semibold text-lg ${
                    activeIndex === idx ? "text-indigo-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                <ChevronRight
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === idx ? "rotate-90 text-indigo-600" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === idx ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
