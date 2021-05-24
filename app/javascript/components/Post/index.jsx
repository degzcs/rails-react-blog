import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const Post = ({ handleError, clearError }) => {
  const [post, setPost] = useState({});
  const { slug } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getPost = async () => {
      const postFromServer = await fetchPost(slug);
      setPost(postFromServer);
    };

    getPost();
  }, []);

  // Fetch Post
  const fetchPost = async (slug) => {
    const res = await fetch(`http://127.0.1:3000/api/v1/posts/show/${slug}`);
    const data = await res.json();

    return data;
  };

  // Delete
  const onClickDelete = async () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;

    const res = await fetch(
      `http://127.0.0.1:3000/api/v1/posts/destroy/${post.slug}`,
      {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
      }
    ).catch((e) => {
      handleError(e);
    });

    if (!res) return;
    clearError();
    const data = await res.json();
    history.push(`/blog`);
  };
  return (
    <div className="">
      <div className="container hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={post.image}
          alt={`${post.title} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
      </div>
      <div className="container bg-light">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link
              className={post.localPost ? "nav-link" : "nav-link disabled"}
              to={`/blog/update-post/${post.slug}`}
            >
              Edit
            </Link>
          </li>
          <li className="nav-item">
            <a
              className={post.localPost ? "nav-link" : "nav-link disabled"}
              onClick={(e) => onClickDelete(e)}
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
      <div className=" container">
        <div className="blog-post">
          <h2 className="blog-post-title">{post.title}</h2>

          <p className="blog-post-meta">
            March 3, 1986 by <a href="#">Matha</a>
          </p>
          <p> {post.content} </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
