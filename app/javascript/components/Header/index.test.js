import React from "react";
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'

import Header from "./index.jsx";

test('checks rendering of Header component', () => {

  const component = renderer.create(
    <StaticRouter location="someLocation">
      <Header />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
