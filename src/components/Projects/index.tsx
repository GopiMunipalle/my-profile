import React from 'react';
import CircleSections from '../CirclesComponent';
import ProjectsText from '../../utils/ProjectsText';

function Projects() {
    return (
        <div className="w-full h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-center px-4 md:px-12">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <CircleSections />
      </div>
      <div className="w-full md:w-1/2 text-center">
        
        <h1 className="text-xl md:text-3xl font-bold text-white mb-2">
          {ProjectsText.PROJECT_1}
        </h1>
        <p className="text-sm md:text-lg text-gray-400">
          {ProjectsText.DESCRIPTION_1}
        </p>
        <p className="text-sm md:text-lg text-gray-400">
          {ProjectsText.TOOLS_1}
        </p>
      </div>
    </div>
    );
}

export default Projects;