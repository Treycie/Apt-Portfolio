import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-4xl font-bold flex flex-col ">
            <span>EDNA</span>
            <span>VALERIE</span>
          </a>
          <button className="btn btn-sm" onClick={() => navigate('/')}>Download CV</button>
          <button className="btn btn-sm" onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className="btn btn-sm" onClick={() => navigate("/blogs")}>Blog Post</button>
        </div>
      </div>
    </header>
  );
};

export default Header;