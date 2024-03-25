import React from "react";
import Navbar from "../../components/navbar/navbar"
import Hero from "../../components/hero/hero";
import Overview from "../../components/overview/overview";
import Workexperience from "../../components/workexperience/workexperience";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import Testimonials from "../../components/testimonials/testimonials";
import Contact from "../../components/contact/contact";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Workexperience />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Landingpage;
