import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { StaticRouter } from 'react-router'

import Post from "./index.jsx";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  fetch.resetMocks();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('checks the Post component', async() => {
  const post = {
		title: 'test',
		description: 'test',
    content: 'test',
    slug: 'test',
    image: 'http://image.jpg'
	}

  fetch.mockResponseOnce(JSON.stringify(post));

  await act(async () => {
    render(
      <StaticRouter location="someLocation">
        <Post/>
      </StaticRouter>
    , container);
  });
  expect(container.textContent).toContain(post.title);
  expect(container.textContent).toContain(post.description);
  expect(container.textContent).toContain(post.content);
});
