import React from "react";
import Work1 from "../../assets/images/Work1.jpg"
import Work2 from "../../assets/images/Work2.png"
import Work3 from "../../assets/images/Work3.png";

const Projects = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 pt-28">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight tex-accent">
                My <br />
                Projects
              </h2>
              <p className="max-w-sm mb-16">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500
              </p>
              <button className="btn btn-sm">View all projects</button>
              
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <a href=""></a>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Work1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">AgroMarketplace</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <a href="https://apt-portfolio.vercel.app/"></a>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Work2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Portfolio</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white"><a href="https://apt-portfolio.vercel.app/" target="blank">Portfolio</a></span>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            

              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Work3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"><a href="https://aptlify.vercel.app/" target="blank">Movie App Design</a></span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
