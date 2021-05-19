import React from 'react';
import Post from '../../components/Post/index.jsx'

const Posts = ({ posts }) => {
  return (
    <>
      <div className="py-5">
        <main className="container-fluid">
          <div className="row">
            { posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Posts;
