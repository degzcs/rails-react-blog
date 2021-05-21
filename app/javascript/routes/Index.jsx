import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home/index.jsx";
import Blog from "../containers/Blog/index.jsx";
import Post from "../components/Post/index.jsx";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component= {Blog} />
          <Route path="/blog/:id" exact component= {Post} />
        </Switch>
      </Router>
    </>
  )}

export default Routes;
