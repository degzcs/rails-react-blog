import React, { useState, useEffect, forwardRef } from "react";
import Posts from "../../components/Posts/index.jsx";
import useInfiniteScroll from 'react-infinite-scroll-hook';

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = React.useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState(false)

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

  const loadMore = async () => {
    setLoading(true)
    try {
      //const postsFromServer = await fetchPosts()
      //setPosts(postsFromServer)
      const data = [{title: 'test', content: 'tests', slug: 'tests'}]
      console.log(data)
      setPosts((currentPosts) => [...currentPosts, ...data])
      setHasNextPage(false)
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  });

  return(
    <div
      className='container'
    >
      <Posts
        posts={posts}
        hasNextPage={hasNextPage}
        infiniteRef={infiniteRef}
        rootRef={rootRef}
      />
    </div>
  )
}

export default Blog
