import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home/index.jsx";
import Blog from "../containers/Blog/index.jsx";
import Post from "../components/Post/index.jsx";
import NewPost from "../components/NewPost/index.jsx";
import UpdatePost from "../components/UpdatePost/index.jsx";
import Header from '../components/Header/index.jsx'
import Footer from '../components/Footer/index.jsx'

const Routes = ({handleError, clearError}) => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component= {Blog} />
          <Route
            path="/blog/new-post"
            exact
            render={(props) => (
              <NewPost
                handleError={handleError}
                clearError={clearError}
              />
            )}
            />
          <Route
            path="/blog/update-post/:slug"
            exact
            render={(props) => (
              <UpdatePost
                handleError={handleError}
                clearError={clearError}
              />
            )}
          />
          <Route
            path="/blog/:slug"
            exact
            render={(props) => (
              <Post
                handleError={handleError}
                clearError={clearError}
              />
            )}
          />
        </Switch>
        <Footer/>
      </Router>
    </>
  )}

export default Routes;
