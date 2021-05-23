import React from "react";
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'

import PostForm from "./index.jsx";

test('checks rendering of PostForm component', () => {
  const post = {
		title: 'test',
		description: 'test',
    slug: 'test',
    image: 'http://image.jpg'
	}

  const component = renderer.create(
    <StaticRouter location="someLocation">
      <PostForm post={post}/>
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
