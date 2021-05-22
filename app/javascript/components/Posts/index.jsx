import React from 'react';
import { Link } from 'react-router-dom'
import BlogPost from '../../components/BlogPost/index.jsx'

const Posts = ({ posts }) => {
  return (
    <>
      <div className="py-5">
        <main className="container-fluid">
          <div className="row">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link
                  className="btn btn-lg bg-light"
                  to='blog/new-post/'>
                  New Post
                </Link>
              </li>
            </ul>
          </div>
          <div className="row posts">
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
