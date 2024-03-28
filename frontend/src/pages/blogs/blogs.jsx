import { useEffect, useState } from "react";
import { apiGetAllBlogs } from "../../services/blogs.services";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const blogs = await apiGetAllBlogs();

    setBlogs(blogs.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-5 flex text-black"
          >
            <div className="bg-purple-500 shadow-md shadow-black rounded-xl p-5 hover:bg-gray-100 flex flex-col justify-between">
              <div className="bg-white shadow-md shadow-black rounded-xl p-5 hover:bg-gray-100 flex flex-col justify-between">
                <h1 className="text-2xl text-wrap font-bold mt-4 ">
                  {post.title}
                </h1>
                <img src={post.image} className="mx-auto" alt={post.title} />
                <p className="text-center">{post.date}</p>
                <p className="text-center">{post.article}</p>
                <button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={() =>
                    navigate(`/blogs/${post._id}`, { state: post })
                  }
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
