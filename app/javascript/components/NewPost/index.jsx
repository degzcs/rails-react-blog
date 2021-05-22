import React , { useState } from 'react';
import { useHistory } from 'react-router-dom'
import PostForm from '../PostForm/index.jsx'

const NewBlog = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    content: '',
    image: ''
  })
  const history = useHistory()
  //const { slug } = useParams()

  const onSubmit = async (e) => {
    e.preventDefault()
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const res = await fetch('http://127.0.0.1:3000/api/v1/posts/create', {
      method: 'POST',
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

export default NewBlog