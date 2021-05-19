import React, { useState, useEffect } from "react";
import Routes from "../routes/Index";

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }

    getPosts()
  }, [])

  // Fetch Tasks
  const fetchPosts = async () => {
    const res = await fetch('http://127.0.1:3000/api/v1/posts/index')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchPost = async (id) => {
    const res = await fetch(`http://127.0.1:3000/api/v1/posts/show/${id}`)
    const data = await res.json()

    return data
  }

  return (
    <>
      <Routes posts={posts}/>
    </>
  )
}

export default App;
