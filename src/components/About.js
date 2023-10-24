import React from "react";
import resume from "../Assets/files/Aaron Omale Resume.pdf";
import img from "../Assets/images/cartoon.webp";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800 dark:text-white">
            Hi, I'm Aaron.
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Enthusiastic and results-driven Full Stack Developer, offering a
            diverse skill set honed through hands-on experience in developing
            innovative web and mobile applications. Demonstrated expertise in a
            wide array of technologies, including React, React Native,
            TypeScript, and Node.js. Passionate about continuous learning, I
            thrive on staying ahead of industry trends to deliver cutting-edge
            solutions. Committed to empowering communities and organizations
            through technology.
          </p>
          <div className="flex justify-center">
            <a
              href={resume}
              download="Aaron_Resume"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              target="_blank"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex  text-white bg-gray-600 dark:text-gray-400 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </section>
  );
}
