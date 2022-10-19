/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RatingSummary from '../RatingSummary.jsx';
import sampleData from '../sampleData/reviewsMeta.js';

afterEach(cleanup);

describe('This will test the component', () => {
  test('renders message', () => {
    const { getByText } = render(<RatingSummary metadata={sampleData} />);

    expect(getByText('RATINGS & REVIEWS')).toBeInTheDocument();
  });
});
