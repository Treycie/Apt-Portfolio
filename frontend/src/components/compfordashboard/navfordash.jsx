import React, { useState } from "react";
import {
  LayoutDashboard,
  SquarePlusIcon,
  SquareLibrary,
  SquareCodeIcon,
  SparkleIcon,
  BookHeart,
} from "lucide-react";
import { motion } from "framer-motion";
import RightArrowIcon from "../../assets/svg/rightArrow.svg";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/images/profile-picture.png"

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

const Navfordash = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();
  
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state
  };


  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#151030] relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[purple] flex justify-center items-center"
      >
        <img src={RightArrowIcon} alt="arrow" className="w-2" />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[purple] flex justify-center items-center"
      >
        <img src={RightArrowIcon} alt="arrow" className="w-2" />
      </div>

      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full" src={Profile} alt="Rounded avatar"
        />
        <div class="font-medium text-white">
          <div className={!isExpanded ? "hidden" : "block"}>Valerie</div>
          <div className={!isExpanded ? "hidden" : "block"}>
            My Portfolio
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
          <div className={`flex space-x-3 w-full p-2 rounded hover:cursor-pointer ${isClicked ? 'bg-[#800080]' : ''} text-white`} onClick={handleClick}>
            <LayoutDashboard onClick={() => navigate("/dashboard/home")} />
            <span
              className={!isExpanded ? "hidden" : "block"}
              onClick={() => navigate("/dashboard/home")}
            >
              Home
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded hover:cursor-pointer hover:bg-[#800080] text-white">
            <SquarePlusIcon onClick={() => navigate("/dashboard/skills")}  />
            <span
              className={!isExpanded ? "hidden" : "block"}
              onClick={() => navigate("/dashboard/skills")}
            >
              Skills
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded hover:cursor-pointer hover:bg-[#800080] text-white">
            <SquareLibrary onClick={() => navigate("/dashboard/experiences")} />
            <span
              className={!isExpanded ? "hidden" : "block"}
              onClick={() => navigate("/dashboard/experiences")}
            >
              Experiences
            </span>
          </div>
        </div>
        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded hover:cursor-pointer hover:bg-[#800080] text-white">
            <SquareCodeIcon onClick={() => navigate("/dashboard/projects")} />
            <span
              className={!isExpanded ? "hidden" : "block"}
              onClick={() => navigate("/dashboard/projects")}
            >
              Projects
            </span>
          </div>
        </div>
        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded hover:cursor-pointer hover:bg-[#800080] text-white">
            <SparkleIcon onClick={() => navigate("/dashboard/achievements")} />
            <span
              className={!isExpanded ? "hidden" : "block"}
              onClick={() => navigate("/dashboard/achievements")}
            >
              Achievements
            </span>
          </div>
        </div>
        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded hover:cursor-pointer hover:bg-[#800080] text-white">
            <BookHeart onClick={() => navigate("/dashboard/blogs")} />
            <span
              className={!isExpanded ? "hidden" : "block"}
              onClick={() => navigate("/dashboard/blogs")}
            >
              Blogs
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navfordash;
