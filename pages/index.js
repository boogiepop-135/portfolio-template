import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import ProjectListCard from "../components/ProjectListCard";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TimelineSection from "../components/TimelineSection";
import ContactSection from "../components/ContactSection";
import Navigation from "../components/Navigation";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    // Only run animations on client side
    if (typeof window !== 'undefined') {
      stagger(
        [textOne.current, textTwo.current, textThree.current, textFour.current],
        { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
    }
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Levi Eduardo Villarreal - Desarrollador Full Stack especializado en React, Python, Flask y desarrollo de chatbots con IA" />
        <meta name="keywords" content="desarrollador full stack, react, python, flask, chatbot, IA, queretaro, mexico" />
      </Head>

      {/* Navigation */}
      <Navigation
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />

      {/* Hero Section */}
      <HeroSection data={data} />

      {/* Stats Section */}
      <StatsSection />

      <div className="container mx-auto mb-10">
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef} id="projects">
          <h1 className="text-3xl laptop:text-4xl text-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Proyectos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Una selección de mis proyectos más destacados desarrollados con tecnologías modernas
          </p>

          <div className="space-y-6">
            {data.projects.map((project, index) => (
              <ProjectListCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" id="services">
          <h1 className="text-3xl laptop:text-4xl text-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Servicios
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Tecnologías y servicios que domino para crear soluciones digitales innovadoras
          </p>
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        {/* Timeline Section */}
        <TimelineSection experiences={data.resume.experiences} />

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef} id="about">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 laptop:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl laptop:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Acerca de mí
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 laptop:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 items-center">
                  {/* Text content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">LE</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Levi Eduardo Villarreal</h2>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">Desarrollador Full Stack</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Desarrollador Full Stack con formación en 4Geeks Academy y experiencia en control de calidad y procesos técnicos. 
                      Enfocado en crear soluciones eficientes con React, Flask y SQL, integrando pensamiento analítico y resolución de problemas en entornos web.
                    </p>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Mi formación en Ingeniería Química me aporta una perspectiva única para abordar desafíos técnicos con metodología científica y creatividad.
                    </p>
                    
                    {/* Skills highlights */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        React & JavaScript
                      </span>
                      <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        Python & Flask
                      </span>
                      <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        SQL & Databases
                      </span>
                      <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                        Chatbots & IA
                      </span>
                    </div>
                  </div>
                  
                  {/* Visual elements */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                      <h3 className="text-2xl font-bold mb-4">Mi Enfoque</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm">🎯</span>
                          </div>
                          <span className="text-lg">Soluciones Eficientes</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm">⚡</span>
                          </div>
                          <span className="text-lg">Desarrollo Rápido</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm">🔬</span>
                          </div>
                          <span className="text-lg">Metodología Científica</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm">🚀</span>
                          </div>
                          <span className="text-lg">Innovación Constante</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <ContactSection socials={data.socials} />
        
        <Footer />
      </div>
    </div>
  );
}
