import React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";

import Posts from "./index.jsx";

test("checks the rendering of the Posts", () => {
  const posts = [
    {
      title: "test",
      description: "test",
      slug: "test",
      image: "http://image.jpg",
    },
  ];

  const component = renderer.create(
    <StaticRouter location="someLocation">
      <Posts posts={posts} />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
