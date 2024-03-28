import React, { useEffect, useState } from "react";
import { apiGetAllBlogs } from "../../services/blogs.services";



const Blogs = () => {
  const data = [
    {
      title:
        " Exploring Git: Repositories, Discussion groups, Issues & Features",
      img: "https://i.ibb.co/DYxtCJq/img-1.png",
      content: "This post will cover topic of exploring Git",
      date: "Oct 5, 2023",
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
      date: "Oct 5, 2023",
    },
    {
      title:
        " Mastering GitHub: A Comprehensive Guide to Streamlining Development Workflows",
        " Exploring Git: Repositories, Discussion groups, Issues & Features",
      img: "https://i.ibb.co/DYxtCJq/img-1.png",
      content: "",
      date: "Oct 5, 2023",
    },

    {
      title:
        " The Art of React.js: Designing Elegant and Efficient User Interfaces",
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
      img: "https://i.ibb.co/DYxtCJq/img-1.png",
      content: "",
      date: "Oct 5, 2023",
    },


    {
      title:
        " Express.js Essentials: A Deep Dive into Building Scalable and Maintainable APIs",
    {
      
      title:
        " Exploring Git: Repositories, Discussion groups, Issues & Features",
      img: "https://i.ibb.co/DYxtCJq/img-1.png",
      content: "",
      date: "Oct 5, 2023",
    },
  ];

  const [blogs, setBlogs] = useState([]);


const fetchData = async () => {
const blogsdata = await apiGetAllBlogs();

setBlogs(blogsdata.data);

};

useEffect(() => {
  fetchData();
}, []);


const handleReadMore = (title) => {
  const searchQuery = encodeURIComponent(title);
  const searchUrl = `https://medium.com/search?q=${searchQuery}`;
  window.open(searchUrl, "_blank");
};


    <>
      <div
        className="text-4xl font-bold leading-9
      text-center text-gray-800"
      >
        <h1>Blogs</h1>
      </div>
     
      <div className="flex flex-wrap justify-center gap-5  items-stretch">
        {data.map((post, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-5 flex">
            <div className="bg-white shadow-md shadow-black rounded-xl p-5 hover:bg-gray-100 flex flex-col justify-between">
              <h1 className="text-2xl text-wrap font-bold mt-4">
                {post.title}
              </h1>
              <img src={post.img} className="mx-auto" alt={post.title} />
              <p className="text-center">{post.date}</p>
              <p className="text-center">{post.content}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => handleReadMore(post.title)}
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

      {/* 
      <div className="flex flex-wrap justify-center gap-5 items-center ">
        {data.map((post, index) => (
          <div className="  shadow-md shadow-black rounded-xl p-5 ">
            <h1 className="text-2xl text-wrap font-bold mt-4">{post.title}</h1>
            <img src={post.img} className="mx-auto" />
            <p className="text-center">{post.date}</p>
            <p className="text-center">{post.content}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ">
              Read More
            </button>
          </div>
        ))} */}

      {/* <div className="shadow-md shadow-black p-20 rounded-xl ">
          <h1 className="text-xl font-bold mt-4">
            Getting Started with Git: Downloading, Setting Up Git Bash, and
            Cloning Repositories
          </h1>
          <img
            src="https://i.ibb.co/DYxtCJq/img-1.png"
            className=""
            alt="chair"
          />
          <p>Posted on Oct 4, 2023</p>
          <p>This post will cover topic of exploring Git</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Read More
          </button>
        </div>

        <div className="shadow-md shadow-black p-20  ">
          <h1 className="text-xl font-bold mt-4">
            Javascript Event Loop Explained
          </h1>
          <img
            src="https://i.ibb.co/DYxtCJq/img-1.png"
            className=""
            alt="chair"
          />
          <p>Posted on Oct 3, 2023</p>
          <p>This post will cover topic of exploring Git</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Read More
          </button>
        </div>

        <div className="shadow-md shadow-black p-20  ">
          <h1 className="text-xl font-bold mt-4">
            Prototype and Prototypical Inheritance
          </h1>
          <img
            src="https://i.ibb.co/DYxtCJq/img-1.png"
            className=""
            alt="chair"
          />
          <p>Posted on Oct 2, 2023</p>
          <p>This post will cover topic of exploring Git</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Read More
          </button>
        </div> */}
      {/* </div> */}
      // <div className="flex flex-wrap justify-center gap-5 items-center">
      //   {data.map((post, index) => (
      //     <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-5">
      //       <div className="bg-white shadow-md shadow-black rounded-xl p-5">
      //         <h1 className="text-2xl text-wrap font-bold mt-4">
      //           {post.title}
      //         </h1>
      //         <img src={post.img} className="mx-auto" alt={post.title} />
      //         <p className="text-center">{post.date}</p>
      //         <p className="text-center">{post.content}</p>
      //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
      //           Read More
      //         </button>
      //       </div>
      //     </div>
      //   ))}
      // </div>
  
  


export default Blogs;
