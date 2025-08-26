import React from "react";
import { Check, Award, ClipboardCheck, Dribbble, Filter, Zap, BadgeCheck } from "lucide-react";
import featuresImg from "../../../public/assets/img/features.png";
import altFeaturesImg from "../../../public/assets/img/alt-features.png";

const Features = () => {
  const featureItems = [
    "Eos aspernatur rem",
    "Facilis neque ipsa",
    "Volup amet volupt",
    "Rerum omnis sint",
    "Alias possimus",
    "Repellendus molli",
  ];

  const altFeatures = [
    {
      icon: <Award className="w-10 h-10 text-indigo-600" />,
      title: "Corporis voluptates sit",
      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-indigo-600" />,
      title: "Ullamco laboris nisi",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: <Dribbble className="w-10 h-10 text-indigo-600" />,
      title: "Labore consequatur",
      desc: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    },
    {
      icon: <Filter className="w-10 h-10 text-indigo-600" />,
      title: "Beatae veritatis",
      desc: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
    },
    {
      icon: <Zap className="w-10 h-10 text-indigo-600" />,
      title: "Molestiae dolor",
      desc: "Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte",
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-indigo-600" />,
      title: "Explicabo consectetur",
      desc: "Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore",
    },
  ];

  return (
    <>
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Features</h2>
            <p className="text-gray-600">Our Advanced Features</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <img
              src={featuresImg}
              alt="Features"
              className="rounded-lg shadow-lg"
            />

            {/* Right Features List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {featureItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white shadow-md p-4 rounded-md transition hover:shadow-xl"
                >
                  <Check className="w-6 h-6 text-indigo-600 mr-3" />
                  <h3 className="text-base font-semibold text-gray-800">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alt Features Section */}
      <section id="alt-features" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Features */}
            <div className="grid sm:grid-cols-2 gap-8">
              {altFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {feature.icon}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Image */}
            <img
              src={altFeaturesImg}
              alt="Alt Features"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
