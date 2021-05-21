import React from 'react';
import { Link } from "react-router-dom";

const Post = ({ post, index }) => {
return (
    <>
    <Link to={`/posts/${post.id}`}>
      <div key={index} className="col-12 mt-3">
        <div className="card">
          <div className='row'>
            <div className="col-lg-5  col-sm-12 card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="">
                {post.description}
              </p>
            </div>
            <div className="col-lg-7 col-sm-12 image-bk" style={{
              backgroundImage: `url(${post.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              backgroundPosition: '50% 50%',
              paddingBottom: '25%'
            }}>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>
  )

}
export default Post;
