import React from "react";

import cssImg from "../../assets/images/css.png";
import htmlImg from "../../assets/images/html.png";
import javascriptImg from "../../assets/images/javascript.png";
import mongodbImg from "../../assets/images/mongo.png";
import nodejsImg from "../../assets/images/node.png";
import reactjsImg from "../../assets/images/react.png";
import githubImg from "../../assets/images/github.png";
import tailwindcssImg from "../../assets/images/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> (These are the technologies I've worked with)</p>
        </div>
        <div
          className="w-full 
          rid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
        >
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={cssImg} alt="" />
            <p className="my-4">CSS</p>
          </div>
          <div lassName="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={htmlImg} alt="" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascriptImg} alt="" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongodbImg} alt="" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={nodejsImg} alt="" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactjsImg} alt="" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={githubImg} alt="" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwindcssImg} alt="" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
