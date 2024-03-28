import React from 'react'
import { useLocation } from 'react-router-dom'

const Article = () => {
  const location =  useLocation()


const post = location.state

   
  return (
    <div className='text-black'>
    <div>{post.title}</div>
    <div>{post.content}</div>
    </div>
  )
}

export default Article