import React , { useState } from 'react';
import { Link } from 'react-router-dom'

const NewBlog = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    content: '',
    image: ''
  })
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
    })
    const data = await res.json()
  }

  const onChange = (e) => {
    setPost({...post, [e.target.name]: event.target.value });
  }

  return(
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new recipe to our awesome recipe collection.
            </h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="postTitle">Post Title</label>
                <input
                  type="text"
                  name="title"
                  id="postTitle"
                  className="form-control"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postDescription">Description</label>
                <input
                  type="text"
                  name="description"
                  id="postDescription"
                  className="form-control"
                  required
                  onChange={onChange}
                />
                <small id="postHelp" className="form-text text-muted">
                  This is a short description about what is the post about.
                </small>
              </div>
              <label htmlFor="postContent">Content</label>
              <textarea
                className="form-control"
                id="postContent"
                name="content"
                rows="5"
                required
                onChange={onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Send
              </button>
              <Link to="/blog" className="btn btn-link mt-3">
                Back to posts
              </Link>
            </form>
          </div>
        </div>
      </div>
  )
}

export default NewBlog
