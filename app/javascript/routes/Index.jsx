import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home/index.jsx";
import Blog from "../containers/Blog/index.jsx";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component= {Blog} />
        </Switch>
      </Router>
    </>
  )}

export default Routes;
