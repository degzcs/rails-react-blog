import React from 'react';
import { Link } from 'react-router-dom'
import BlogPost from '../../components/BlogPost/index.jsx'

const Posts = ({ posts }) => {
  return (
    <>
      <div className="py-5 posts">
        <main className="container-fluid">
          <div className="row">
            <ul className="nav">
              <li className="nav-item">
                <Link to='blog/new-post/'>New Post</Link>
              </li>
            </ul>
          </div>
          <div className="row">
            { posts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Posts;
