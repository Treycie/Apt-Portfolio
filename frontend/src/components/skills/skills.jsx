import React from "react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


const skills = [
  {
    name: "HTML",
    proficiency:
      "Advanced",
  },
  {
    name: "CSS",
    proficiency:
      "Intermediate",
  },
  {
    name: "JavaScript",
    proficiency:
      "Beginner",
  },
  {
    name: "React",
    proficiency:
      "Intermediate",
  },
];




const Skills = ({name, proficiency}) => {
  return(
    <section className="section my-24" id="workexperience">
      <div className="container mx-auto">
        <div className="flex flex-row lg:flex-wrap">

          <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">My Skills</h2>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1">
            <div>
              {skills.map((skills, index) => {
                const { name, proficiency} = skills;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{proficiency}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      
                      </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
