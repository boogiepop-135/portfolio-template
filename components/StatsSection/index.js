import React from "react";

const StatsSection = () => {
  const stats = [
    {
      number: "6+",
      label: "Proyectos Completados",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2+",
      label: "Años de Experiencia",
      icon: "💼",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "10+",
      label: "Tecnologías Dominadas",
      icon: "⚡",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "100%",
      label: "Satisfacción del Cliente",
      icon: "⭐",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl laptop:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mis Logros en Números
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Datos que reflejan mi compromiso con la excelencia y la innovación en el desarrollo de software
          </p>
        </div>
        
        <div className="grid grid-cols-2 laptop:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl laptop:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-20 rounded-bl-2xl rounded-tr-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
