/**
 * @jest-environment jsdom
*/
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './B-Search.jsx';

afterEach(cleanup);

jest.mock('./B-Search.jsx', () => () => (
  <div data-testid="qnaSearch" />
));

describe('qna search render', () => {
  it('should render on widget load', () => {
    const product = {
      id: 40346,
    };
    const { getByTestId } = render(<QnaWidget product={product} />);
    expect(getByTestId('qnaSearch')).toBeInTheDocument();
  });
});

describe('Test the search bar renders the correct placeholder', () => {
  test('renders the component', () => {
    const { getByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText('Have a question? Search for the answers...')).toBeInTheDocument();
  });
});
