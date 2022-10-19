/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RatingSummary from './RatingSummary.jsx';

afterEach(cleanup);

describe('This will test the component', () => {
  test('renders message', () => {
    const sampleData = {
      product_id: '40344',
      ratings: {
        1: '86',
        2: '98',
        3: '237',
        4: '196',
        5: '409',
      },
      recommended: {
        false: '250',
        true: '776',
      },
      characteristics: {
        Fit: {
          id: 135219,
          value: '3.2857142857142857',
        },
        Length: {
          id: 135220,
          value: '3.3292307692307692',
        },
        Comfort: {
          id: 135221,
          value: '3.2567114093959732',
        },
        Quality: {
          id: 135222,
          value: '3.2318840579710145',
        },
      },
    };
    const { getByText } = render(<RatingSummary metaData={sampleData} />);

    expect(getByText('RATINGS & REVIEWS')).toBeInTheDocument();
  });
});
