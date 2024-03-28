import React from 'react';
import { useLocation } from 'react-router-dom';

const Article = () => {
  const location = useLocation();
  const post = location.state;

  return (
    <div className='text-black'>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        
        {post.img && (
          <div className="mb-4">
            <img src={post.img} alt={post.title} className="w-full" />
          </div>
        )}

        
        <div>
          <p className="text-lg">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;

