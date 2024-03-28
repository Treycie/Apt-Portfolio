import { useEffect, useState } from "react";
import { apiGetAllBlogs } from "../../services/blogs.services";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const data = [
    {
      title:
        " Exploring Git: Repositories, Discussion groups, Issues & Features",
      img: "",
      content: "This post will cover topic of exploring Git",
      date: "March 10, 2024",
    },
    {
      title:
        "Mastering the Art of Frontend and Backend Development: A Comprehensive Guide for Beginners and Beyond ",
      img: "https://i.ibb.co/DYxtCJq/img-1.png",
      content: "",
      date: "Oct 5, 2023",
    },
    {
      title:
        " From Syntax to Sorcery: Mastering JavaScript for Dynamic Web Experiences",

      img: "https://i.ibb.co/DYxtCJq/img-1.png",
      content: "",
      date: "Feb 7, 2024",
    },
    {
      title:
        " From Syntax to Sorcery: Mastering JavaScript for Dynamic Web Experiences",
      img: "",
      content: "This post will cover topic of exploring Javascript",
      date: "Jan 5, 2024",
    },
    {
      title:
        " Mastering GitHub: A Comprehensive Guide to Streamlining Development Workflows",
        img: "",
      content: "This post will cover topic of exploring Git",
      date: "Dec 4, 2023",
    },
    {
      title:
        " Mastering GitHub: A Comprehensive Guide to Streamlining Development Workflows",
      img: "https://i.ibb.co/DYxtCJq/img-1.png",
      content: "",
      date: "Oct 5, 2023",
    },

    {
      title:
        " Mastering GitHub: A Comprehensive Guide to Streamlining Development Workflows",
      img: "https://i.ibb.co/DYxtCJq/img-1.png",
      content: "",
      date: "Oct 5, 2023",
    },

    {
      title:
        " Exploring Git: Repositories, Discussion groups, Issues & Features",
      img: "",
      content: "This post will cover topic of exploring Git",
      date: "Nov 3, 2023",
    },

    {
      
      title:
        " Exploring Git: Repositories, Discussion groups, Issues & Features",
      img: "",
      content: "This post will cover topic of exploring Git",
      date: "Oct 2, 2023",
    },
  ];

  const [blogs, setBlogs] = useState([]);
 const navigate=  useNavigate()

  const fetchData = async () => {
    const blogs = await apiGetAllBlogs();

    setBlogs(blogs.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReadMore = (title) => {
    const searchQuery = encodeURIComponent(title);
    const searchUrl = `https://medium.com/search?q=${searchQuery}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <>
      <div
        className="text-4xl font-bold leading-9
      text-center text-gray-800"
      >
        <h1>Blogs</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-5  items-stretch">
      {blogs.map((post, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-5 flex">
          <div className="bg-white shadow-md shadow-black rounded-xl p-5 hover:bg-gray-100 flex flex-col justify-between">
            <h1 className="text-2xl text-wrap font-bold mt-4">{post.title}</h1>
            <img src={post.img} className="mx-auto" alt={post.title} />
            <p className="text-center">{post.date}</p>
            <p className="text-center">{post.content}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => navigate(`/blogs/${post._id}`, {state: post})}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Blogs;
