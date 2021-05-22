import React , { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import PostForm from '../PostForm/index.jsx'

const UpdatePost  = () => {
  const [post, setPost] = useState({})
  const history = useHistory()
  const { slug } = useParams()

  useEffect(() => {
    const getPost = async () => {
      const postFromServer = await fetchPost(slug)
      console.log(postFromServer)
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

  const onSubmit = async (e) => {
    e.preventDefault()
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const res = await fetch('http://127.0.0.1:3000/api/v1/posts/update', {
      method: 'PUT',
      headers: {
                'X-CSRF-Token': token,
                'Content-type': 'application/json',
              },
      body: JSON.stringify(post),
    }).catch( e => {
      throw new Error("There were something wrong.");
    })

    if(!res) return;
    const data = await res.json()
    history.push(`/blog/${data.slug}`)
  }

  const onChange = (e) => {
    setPost({...post, [e.target.name]: event.target.value });
  }

  return(
    <>
      <PostForm post={post} onChange={onChange} onSubmit={onSubmit}/>
    </>
  )
}

export default UpdatePost
