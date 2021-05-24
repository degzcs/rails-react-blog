import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import BlogPost from "../../components/BlogPost/index.jsx";

const Loading = () => {
  return <p>Loading...</p>;
};

const Posts = ({ posts, hasNextPage, infiniteRef, rootRef }) => {
  return (
    <>
      <div className="py-5">
        <main className="container-fluid">
          <div className="row mt-5">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link className="btn btn-lg bg-light" to="blog/new-post/">
                  New Post
                </Link>
              </li>
            </ul>
          </div>
          <div className="row posts mb-5">
            {posts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
            {hasNextPage && (
              <div ref={infiniteRef}>
                <Loading />
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Posts;
