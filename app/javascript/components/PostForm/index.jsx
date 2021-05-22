import React from 'react';
import { Link } from 'react-router-dom'

const PostForm = ({post, onSubmit, onChange}) => {
  return(
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              New Post
            </h1>
            <form onSubmit={ (e) => onSubmit(e) }>
              <div className="form-group">
                <label htmlFor="postTitle">Post Title</label>
                <input
                  type="text"
                  name="title"
                  id="postTitle"
                  className="form-control"
                  value={post.title}
                  required
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postDescription">Description</label>
                <input
                  type="text"
                  name="description"
                  id="postDescription"
                  className="form-control"
                  value={post.description}
                  required
                  onChange={(e) => onChange(e)}
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
                value={post.content}
                onChange={(e) => onChange(e)}
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

export default PostForm
