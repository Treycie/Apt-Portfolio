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
import { useLocation, useNavigate, Link } from "react-router-dom";
import Profile from "../../assets/images/profile-picture.png";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

const navLinks = [
  {
    title: "Home",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Skills",
    path: "/dashboard/skills",
    icon: SquarePlusIcon,
  },
  {
    title: "Experiences",
    path: "/dashboard/experiences",
    icon: SquareLibrary,
  },
  {
    title: "Projects",
    path: "/dashboard/projects",
    icon: SquareCodeIcon,
  },
  {
    title: "Achievements",
    path: "/dashboard/achievements",
    icon: SparkleIcon,
  },
  {
    title: "Blogs",
    path: "/dashboard/blogs",
    icon: BookHeart,
  },
];

const Navfordash = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#151030]  sticky top-0" +
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
        <Link to="/">
          <img
            className="w-10 h-10 rounded-full"
            src={Profile}
            alt="Rounded avatar"
          />
        </Link>
        <div className="font-medium text-white">
          <div className={!isExpanded ? "hidden" : "block font-bold text-3xl"}>
            Valerie
          </div>
          <div className={!isExpanded ? "hidden" : "block text-white/70"}>
            My Portfolio
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        {navLinks.map((link, index) => (
          <div
            className="nav-links w-full"
            onClick={() => navigate(link.path)}
            key={index}
          >
            <div
              className={`flex space-x-3 w-full p-2 rounded hover:cursor-pointer ${
                location.pathname === link.path && "bg-[#800080]"
              } text-white`}
            >
              <link.icon />
              <span className={!isExpanded ? "hidden" : "block"}>
                {link.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Navfordash;
