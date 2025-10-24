import React, { useEffect, useState } from "react";
import FloatingParticles from "../FloatingParticles";
import TypewriterText from "../TypewriterText";

const HeroSection = ({ data }) => {
  const texts = [
    "Desarrollador Full Stack",
    "Especialista en React & Python",
    "Experto en Automatización",
    "Desarrollador de Chatbots IA",
    "Creador de Soluciones Digitales"
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating particles */}
        <FloatingParticles />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-400/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-400/20 rounded-full blur-xl animate-bounce"></div>
        
        {/* Additional floating shapes */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="text-xl laptop:text-2xl font-light opacity-90">
            {data.headerTaglineOne}
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl laptop:text-6xl laptop:text-7xl font-bold mb-6 animate-slide-up">
          {data.headerTaglineTwo}
        </h1>

        {/* Dynamic title */}
        <div className="h-16 laptop:h-20 mb-8 flex items-center justify-center">
          <h2 className="text-2xl laptop:text-4xl laptop:text-5xl font-semibold animate-fade-in">
            <TypewriterText texts={texts} />
          </h2>
        </div>

        {/* Location */}
        <p className="text-lg laptop:text-xl opacity-90 mb-12 animate-slide-up-delayed">
          {data.headerTaglineFour}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col laptop:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
          <button
            onClick={() => {
              if (typeof document !== 'undefined') {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Mis Proyectos
          </button>
          <button
            onClick={() => {
              if (typeof document !== 'undefined') {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Contactar
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-slide-up-delayed {
          animation: slide-up 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
