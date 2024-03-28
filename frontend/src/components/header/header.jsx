import React from 'react';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return(
  <header className='py-8'>
    <div className='container mx-auto'>
       <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={logo}/>
        </a>
        <button className='btn btn-sm'>Download CV</button>
        <button className='btn btn-sm'>Dashboard</button>
        <button className='btn btn-sm'>Blog Post</button>
       </div>
    </div>
  </header>
  );
};

export default Header;