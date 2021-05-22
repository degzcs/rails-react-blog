import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home/index.jsx";
import Blog from "../containers/Blog/index.jsx";
import Post from "../components/Post/index.jsx";
import Header from '../components/Header/index.jsx'
import Footer from '../components/Footer/index.jsx'

const Routes = () => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component= {Blog} />
          <Route path="/blog/:slug" exact component= {Post} />
        </Switch>
        <Footer/>
      </Router>
    </>
  )}

export default Routes;
