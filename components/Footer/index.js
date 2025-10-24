import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 laptop:p-12 text-white">
          <div className="text-center">
            <h1 className="text-2xl laptop:text-3xl font-bold mb-4">Contacto</h1>
            <div className="mt-10">
              <h1 className="text-3xl tablet:text-5xl laptop:text-6xl laptopl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TRABAJEMOS
              </h1>
              <h1 className="text-3xl tablet:text-5xl laptop:text-6xl laptopl:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                JUNTOS
              </h1>
              <Button type="primary" className="mb-10">
                Programar una llamada
              </Button>
              <div className="mt-10">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4 text-center">
        <h1 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Hecho con ❤ por{" "}
          <Link href="https://github.com/boogiepop-135">
            <a className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 transition-colors duration-300">
              Levi Eduardo Villarreal
            </a>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Footer;
