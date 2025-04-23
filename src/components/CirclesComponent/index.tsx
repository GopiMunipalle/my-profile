// CircleSections.jsx
import React from 'react';

const sections = [
  { name: "Home", color: "bg-blue-500" },
  { name: "About", color: "bg-purple-500" },
  { name: "Projects", color: "bg-pink-500" },
  { name: "Skills", color: "bg-green-500" },
];

const CircleSections = () => {
  return (
     <div className="relative w-full h-full flex items-center justify-center">
        {sections.map((section, index) => {
          const size = 200 + index * 120; // Adjusted size for responsiveness
          const offset = (500 - size) / 2; // Centering logic

          return (
            <div
              key={section.name}
              className="absolute rounded-full border-2 border-gray-500 transition hover:border-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                // top: `${offset}px`,
                // left: `${offset}px`,
                zIndex: 10 - index, 
              }}
            >
              <button className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 font-semibold px-2 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-all">
                {section.name}
              </button>
            </div>
          );
        })}
      </div>
  );
};

export default CircleSections;
