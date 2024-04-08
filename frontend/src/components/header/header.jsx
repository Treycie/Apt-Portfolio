import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          
          <button className="btn btn-sm" onClick={() => navigate("/")}>
            Download CV
          </button>
          
          
        </div>
      </div>
    </header>
  );
};

export default Header;
