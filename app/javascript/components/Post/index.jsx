import React from 'react';
import { Link } from "react-router-dom";

const Post = ({ post, index }) => {
return (
    <>
    <Link to={`/posts/${post.id}`}>
      <div key={index} className="col-12 mt-3">
        <div className="card">
          <div className='card-horizontal'>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p>
                {post.description}
              </p>
            </div>
            <div className="image-square-wrapper">
              <img
                src={post.image}
                className="card-img"
                alt={`${post.title} image`}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>
  )

}
export default Post;
