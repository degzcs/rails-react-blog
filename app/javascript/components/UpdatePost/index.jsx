import React , { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import PostForm from '../PostForm/index.jsx'

const UpdatePost  = ({handleError, clearError}) => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    content: '',
    image: null
  })
  const history = useHistory()
  const { slug } = useParams()

  useEffect(() => {
    const getPost = async () => {
      const postFromServer = await fetchPost(slug)
      setPost({...postFromServer, image: null})
    }

    getPost()
  }, [])

  // Fetch Post
  const fetchPost = async (slug) => {
    const res = await fetch(`http://127.0.1:3000/api/v1/posts/show/${slug}`)
    const data = await res.json()

    return data
  }

  // Update
  const update = async () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const formData = new FormData()
    formData.append('title', post.title)
    formData.append('content', post.content)
    formData.append('description', post.description)
    formData.append('slug', post.slug)
    if(post.image) formData.append('image', post.image)

    const res = await fetch('http://127.0.0.1:3000/api/v1/posts/update', {
      method: 'PUT',
      headers: {
                'X-CSRF-Token': token
              },
      body: formData
    }).catch( e => {
      handleError(e)
    })

    if(!res) return;
    clearError()
    const data = await res.json()
    history.push(`/blog/${data.slug}`)
  }

  // Events
  const onSubmit = (e) => {
    e.preventDefault()
    update()
  }

  const onChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value });
  }

  const handleFileChange = (e) => {
    setPost({...post, [e.target.name]: e.target.files[0]});
  }

  return(
    <>
    <PostForm
      post={post}
      onChange={onChange}
      onSubmit={onSubmit}
      handleFileChange={handleFileChange}
      newPost={false}
    />
    </>
  )
}

export default UpdatePost
