import React, { useState, useEffect } from "react";
import Posts from "../../components/Posts/index.jsx";

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }

    getPosts()
  }, [])

  // Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch('http://127.0.1:3000/api/v1/posts/index')
    const data = await res.json()

    return data
  }

  return(
    <div className='container'>
      <Posts posts={posts}/>
    </div>
  )
}

export default Blog
