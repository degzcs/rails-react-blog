import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const [post, setPost] = useState({})
  const { slug } = useParams()

  useEffect(() => {
    const getPost = async () => {
      const postFromServer = await fetchPost(slug)
      setPost(postFromServer)
    }

    getPost()
  }, [])

  // Fetch Post
  const fetchPost = async (slug) => {
    const res = await fetch(`http://127.0.1:3000/api/v1/posts/show/${slug}`)
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
          <div className="container">
            <h1 className="display-4 position-relative text-white">
              {post.title}
            </h1>
          </div>
        </div>
        <div className=" container">
					<div className="blog-post">
						<h2 className="blog-post-title">
							{post.title}
						</h2>

            <p className="blog-post-meta">March 3, 1986 by <a href="#">Matha</a></p>
						<p> {post.content} </p>
        </div>
      </div>
		</div>
  )
}

export default Post
