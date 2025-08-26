import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Walter White",
    role: "Chief Executive Officer",
    img: "/assets/img/team/team-1.jpg", // ✅ fixed path
    desc: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    img: "/assets/img/team/team-2.jpg", // ✅ fixed path
    desc: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
  },
  {
    name: "William Anderson",
    role: "CTO",
    img: "/assets/img/team/team-3.jpg", // ✅ fixed path
    desc: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
  },
  {
    name: "Amanda Jepson",
    role: "Accountant",
    img: "/assets/img/team/team-4.jpg", // ✅ fixed path
    desc: "Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Team</h2>
        <p className="text-gray-600">Our hard working team</p>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center transform transition duration-300 hover:scale-105 group"
            >
              {/* Image & Social */}
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                {/* Social Icons */}
                <div className="absolute top-4 right-[-100%] opacity-0 flex flex-col space-y-3 p-2 bg-white/70 rounded-lg shadow-md transition-all duration-500 group-hover:right-3 group-hover:opacity-100">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-700">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-pink-500">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h4>
                <span className="block text-sm text-gray-500 mb-2">
                  {member.role}
                </span>
                <p className="text-sm italic text-gray-600">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
