import { useNavigate } from "react-router-dom";

const sections = [
  { name: "Home", color: "bg-blue-500", path: "/" },
  { name: "Experience", color: "bg-purple-500", path: "/experience" },
  { name: "Projects", color: "bg-pink-500", path: "/projects" },
  { name: "Contact", color: "bg-green-500", path: "/contact" },
];

const width = window.innerWidth;
const CircleSections = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {sections.map((section, index) => {
        const baseSize = width < 400 ? 20 + index * 100 : 40 + index * 115;

        return (
          <div
            key={section.name}
            className={`absolute rounded-full border-2 border-gray-500 transition hover:border-white`}
            style={{
              width: `${baseSize}px`,
              height: `${baseSize}px`,
              zIndex: 10 - index,
            }}
          >
            <button
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 font-semibold px-3 py-2 text-sm md:text-base rounded-full shadow-lg hover:bg-gray-200 transition-all`}
              onClick={() => navigate(section.path)}
            >
              {section.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CircleSections;
