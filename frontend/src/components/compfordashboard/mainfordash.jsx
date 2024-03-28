import {
  BookHeart,
  SparkleIcon,
  SquareCodeIcon,
  SquareLibrary,
  SquarePlusIcon,
} from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { apiGetAllSkills } from "../../services/skills.services";
import { apiGetAllAchievements } from "../../services/achievements.services";
import { apiGetAllExperiences } from "../../services/experience.services";
import { apiGetAllProjects } from "../../services/projects.services";
import { apiGetAllBlogs } from "../../services/blogs.services";
import { useState } from "react";
import { Triangle } from "react-loader-spinner";

const Mainfordash = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalSkills, setTotalSkills] = useState();
  const [totalExperiences, setTotalExperiences] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalAchievements, setTotalAchievements] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const totalSkills = await apiGetAllSkills();
        const totalExperiences = await apiGetAllExperiences();
        const totalProjects = await apiGetAllProjects();
        const totalAchievements = await apiGetAllAchievements();
        const totalBlogs = await apiGetAllBlogs();

        setTotalSkills(totalSkills.data.length);
        setTotalExperiences(totalExperiences.data.length);
        setTotalProjects(totalProjects.data.length);
        setTotalAchievements(totalAchievements.data.length);
        setTotalBlogs(totalBlogs.data.length);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <Triangle
            visible={true}
            height="200"
            width="200"
            color="#800080"
            ariaLabel="triangle-loading"
            wrapperStyle={{ width: 100 }}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
          <div className="flex space-x-8 py-6">
            <div className="flex  rounded-md border w-[400px] h-[150px] p-8 justify-between items-center">
              <div className="text-2xl flex items-center gap-x-3 font-semibold text-[purple]">
                <SquarePlusIcon />
                <span>Skills</span>
              </div>
              <p className="text-gray-500 text-4xl font-bold">{totalSkills}</p>
            </div>
            <div className="flex  rounded-md border w-[400px] h-[150px] p-8 justify-between items-center">
              <div className="text-2xl flex items-center gap-x-3 font-semibold text-[purple]">
                <SquareLibrary />
                <span>Experiences</span>
              </div>
              <p className="text-gray-500 text-4xl font-bold">
                {totalExperiences}
              </p>
            </div>
          </div>
          <div className="flex space-x-8 py-6">
            <div className="flex  rounded-md border w-[400px] h-[150px] p-8 justify-between items-center">
              <div className="text-2xl flex items-center gap-x-3 font-semibold text-[purple]">
                <SquareCodeIcon />
                <span>Projects</span>
              </div>
              <p className="text-gray-500 text-4xl font-bold">
                {totalProjects}
              </p>
            </div>
            <div className="flex  rounded-md border w-[400px] h-[150px] p-8 justify-between items-center">
              <div className="text-2xl flex items-center gap-x-3 font-semibold text-[purple]">
                <SparkleIcon />
                <span>Achievements</span>
              </div>
              <p className="text-gray-500 text-4xl font-bold">
                {totalAchievements}
              </p>
            </div>
          </div>
          <div className="flex space-x-8 py-6">
            <div className="flex  rounded-md border w-[400px] h-[150px] p-8 justify-between items-center">
              <div className="text-2xl flex items-center gap-x-3 font-semibold text-[purple]">
                <BookHeart />
                <span>Blogs</span>
              </div>
              <p className="text-gray-500 text-4xl font-bold">{totalBlogs}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mainfordash;
