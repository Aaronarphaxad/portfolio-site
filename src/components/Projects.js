import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  const mobile = window.innerWidth < 768;
  const styling = {
    height: mobile ? "290px" : "250px",
    width: mobile ? "80vw" : "400px",
  };
  return (
    <section
      id="projects"
      className="dark:text-gray-400 dark:bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-35">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Using modern technologies, I have built various interactive
            web/mobile apps. Hover to read description, click to see a live
            demo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4 gap-2 sm:gap-3 project-div">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.image}
              className="m-2 border border-gray-700 rounded"
              style={styling}
            >
              <div className="flex relative w-full h-full rounded">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={project.image}
                  id="project-image"
                />
                <div
                  id="project-info"
                  className="px-8 py-5 sm:p-3 rounded relative z-10 w-full h-full border-4 dark:border-gray-800 opacity-0 text-white hover:opacity-100 bg-gray-500 dark:bg-gray-900 dark:hover:opacity-100"
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed" style={{ fontSize: "14px" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
