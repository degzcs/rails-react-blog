import React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";

import NewPost from "./index.jsx";

test("checks rendering of NewPost component", () => {
  const component = renderer.create(
    <StaticRouter location="someLocation">
      <NewPost />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
