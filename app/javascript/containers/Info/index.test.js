import React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";

import Info from "./index.jsx";

test("checks rendering of Info component", () => {
  const component = renderer.create(
    <StaticRouter location="someLocation">
      <Info />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
