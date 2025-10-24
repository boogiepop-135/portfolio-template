import React from "react";

const TimelineSection = ({ experiences }) => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl laptop:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mi Trayectoria Profesional
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un recorrido por mi experiencia profesional y los proyectos más destacados
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 laptop:left-1/2 transform laptop:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'laptop:flex-row' : 'laptop:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 laptop:left-1/2 transform laptop:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10"></div>
                
                {/* Content card */}
                <div className={`ml-12 laptop:ml-0 laptop:w-5/12 ${
                  index % 2 === 0 ? 'laptop:mr-auto laptop:pr-8' : 'laptop:ml-auto laptop:pl-8'
                }`}>
                  <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {exp.dates}
                        </p>
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium mt-1">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                      <span className="mr-2">📍</span>
                      {exp.location}
                    </p>
                    
                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {bullet}
                        </li>
                      ))}
                      {exp.bullets.length > 3 && (
                        <li className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          +{exp.bullets.length - 3} logros más...
                        </li>
                      )}
                    </ul>
                    
                    {/* Decorative element */}
                    <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
