import React from "react";
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'

import BlogPost from "./index.jsx";

test('BlogPost show data', () => {
  const post = {
		title: 'test',
		description: 'test',
    slug: 'test',
    image: 'http://image.jpg'
	}

  const component = renderer.create(
    <StaticRouter location="someLocation">
      <BlogPost post={post}/>
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
