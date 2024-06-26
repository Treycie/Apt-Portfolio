import React from "react";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar"
import Hero from "../../components/hero/hero";
import Overview from "../../components/overview/overview";
import Workexperience from "../../components/workexperience/workexperience";
//import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
//import Testimonials from "../../components/testimonials/testimonials";
import Contact from "../../components/contact/contact";
import "../../../src/index.css"
import Skills from "../../components/skills/skills";

const Landingpage = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header/>
      <Navbar />
      <Hero />
      <Overview />
      <Workexperience />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
};

export default Landingpage;
