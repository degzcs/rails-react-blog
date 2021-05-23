import React from 'react';
import { Link } from "react-router-dom";

const Info = () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4"> Blog: Rails-React app</h1>
        <p className="lead">
          created by Diego Gomez
        </p>
        <hr className="my-4" />
        <a
          href="https://github.com/degzcs/rails-react-blog"
          className="btn btn-lg custom-button"
          role="button"
          target='_blank'
        >
          Github Repo
        </a>
      </div>
    </div>
  </div>
);

export default Info;
