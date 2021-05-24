import React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";

import UpdatePost from "./index.jsx";

test("checks rendering of UpdatePost component", () => {
  const component = renderer.create(
    <StaticRouter location="someLocation">
      <UpdatePost />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
