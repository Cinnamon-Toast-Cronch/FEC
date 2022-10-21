/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QnaWidget from './A-QnaWidget.jsx';
import Search from './B-Search.jsx';
import App from '../app.jsx';

afterEach(cleanup);

describe('Sanity test the Qna widget has a title', () => {
  test('renders the component', () => {
    const product = {
      id: 40346,
    };

    const { getByText } = render(<QnaWidget product={product} />);
    expect(getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });
});

describe('Test the search bar renders the correct placeholder', () => {
  test('renders the component', () => {
    const { getByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText('Have a question? Search for the answers...')).toBeInTheDocument();
  });
});
