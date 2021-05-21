import React from 'react';
import BlogPost from '../../components/BlogPost/index.jsx'

const Posts = ({ posts }) => {
  return (
    <>
      <div className="py-5 posts">
        <main className="container-fluid">
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
