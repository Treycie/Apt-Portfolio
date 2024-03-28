import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Article = () => {
  const location =  useLocation()
//   console.log(location.state)

const post = location.state

   
  return (
    <>
    <div>{post.title}</div>
    <div>{post.content}</div>
    </>
  )
}

export default Article