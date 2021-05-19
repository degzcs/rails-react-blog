import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home/index.jsx";
import Posts from "../components/Posts/index.jsx";

const Routes = ({ posts }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts"
            exact
            render= {(props) => (
              <div className='container'>
                <Posts posts={posts}/>
              </div>
            )}
          />
        </Switch>
      </Router>
    </>
  )}

export default Routes;
