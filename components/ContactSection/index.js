import React from "react";

const ContactSection = ({ socials }) => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl laptop:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            ¿Listo para crear algo increíble juntos?
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
            Soy un desarrollador apasionado que transforma ideas en soluciones digitales innovadoras. 
            Si tienes un proyecto en mente o buscas colaborar, ¡me encantaría ser parte de tu visión!
          </p>
        </div>
        
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Información de Contacto</h3>
            
            {socials.map((social) => (
              <div key={social.id} className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                  <span className="text-xl">
                    {social.title === 'Email' ? '📧' : 
                     social.title === 'LinkedIn' ? '💼' : 
                     social.title === 'GitHub' ? '🐙' : 
                     social.title === 'Teléfono' ? '📱' : '🔗'}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{social.title}</p>
                  <a 
                    href={social.link.startsWith('http') ? social.link : `mailto:${social.link}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {social.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Acciones Rápidas</h3>
            
            <div className="space-y-4">
              <button className="w-full p-4 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-xl transition-all duration-300 text-left group border border-blue-200 dark:border-blue-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Ver mi CV</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Descargar mi currículum actualizado</p>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">📄</span>
                </div>
              </button>
              
              <button className="w-full p-4 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-xl transition-all duration-300 text-left group border border-blue-200 dark:border-blue-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Programar una llamada</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Agendar una reunión virtual</p>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">📅</span>
                </div>
              </button>
              
              <button className="w-full p-4 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-xl transition-all duration-300 text-left group border border-blue-200 dark:border-blue-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Enviar mensaje</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Contacto directo por email</p>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">💬</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 italic">
            "La mejor manera de predecir el futuro es creándolo"
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            ¡Empecemos a crear el futuro juntos!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
