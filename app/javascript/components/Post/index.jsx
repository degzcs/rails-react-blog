import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const [post, setPost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getPost = async () => {
      const postFromServer = await fetchPost(id)
      setPost(postFromServer)
    }

    getPost()
  }, [])

  // Fetch Post
  const fetchPost = async (id) => {
    const res = await fetch(`http://127.0.1:3000/api/v1/posts/show/${id}`)
    const data = await res.json()

    return data
  }

  return(
    <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={post.image}
            alt={`${post.title} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {post.title}
          </h1>
        </div>
		</div>
  )
}

export default Post
