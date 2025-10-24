import React from "react";

const ProjectListCard = ({ project, index }) => {
  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:border-purple-500">
      <div className="flex flex-col laptop:flex-row laptop:items-center laptop:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
            {project.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {project.dates || "Proyecto desarrollado"}
          </p>
        </div>
        <div className="flex gap-3 laptop:ml-6">
          <button
            onClick={() => window.open(project.url)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Ver Proyecto
          </button>
          {project.github && (
            <button
              onClick={() => window.open(project.github)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Código
            </button>
          )}
        </div>
      </div>
      
      <div className="space-y-3">
        {project.bullets && project.bullets.map((bullet, bulletIndex) => (
          <div key={bulletIndex} className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {bullet}
            </p>
          </div>
        ))}
        
        {project.technologies && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
              Tecnologías utilizadas:
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectListCard;
