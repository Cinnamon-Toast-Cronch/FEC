/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QnaWidget from '../A-QnaWidget.jsx';

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
