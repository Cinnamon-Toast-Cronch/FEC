/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Qna from './Qna.jsx';
import Search from './Search.jsx';
import App from '../app.jsx';

afterEach(cleanup);

describe('Sanity test the Qna widget has a title', () => {
  test('renders the component', () => {
    const product = {
      id: 40346,
    };

    const { getByText } = render(<Qna product={product} />);
    expect(getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });
});

describe('Test the search bar renders the correct placeholder', () => {
  test('renders the component', () => {
    const { getByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText('Have a question? Search for the answers...')).toBeInTheDocument();
  });
});
