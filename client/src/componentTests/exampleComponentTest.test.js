import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from '@testing-library/react';
import App from '../components/app.jsx';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
  // let container = null;
});
beforeEach(() => {
  element = document.create('div');
  document.body.appendChild(element);
});

afterEach(() => {
  unmountComponentAtNode(element);
  element.remove();
  element = null;
});

it('renders with or without the title', () => {
  act(() => {
    render(<App />, element);
  });
  expect(element.textContent).toBe('App Title: Hello World');
});
