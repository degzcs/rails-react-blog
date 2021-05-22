import React , { useState } from 'react';
import { useHistory } from 'react-router-dom'
import PostForm from '../PostForm/index.jsx'

const NewBlog = ({handleError, clearError}) => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    content: '',
    image: null
  })
  const history = useHistory()
  //const { slug } = useParams()

  const onSubmit = async (e) => {
    e.preventDefault()
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const formData = new FormData()
    formData.append('title', post.title)
    formData.append('content', post.content)
    formData.append('description', post.description)
    formData.append('slug', post.slug)
    if(post.image) formData.append('image', post.image)

    const res = await fetch('http://127.0.0.1:3000/api/v1/posts/create', {
      method: 'POST',
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
      newPost={true}
    />
    </>
  )
}

export default NewBlog
