import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Price from '../Price.jsx';

// jest.mock('../Price.jsx', () => () => {
//   <p data-testid="sale-price" />;
// });

afterEach(cleanup);

describe('Product Price', () => {
  test('rating distribution bar should be a distribution backgrou that contains a distribution foreground', () => {
    const sampleData = {
      default: false,
      name: 'Sky Blue & White',
      original_price: '140.00',
      sale_price: '100.00',
      style_id: '240504',
    };
    if (sampleData) {
      if (sampleData.sale_price) {
        const sale = sampleData.sale_price;
        const { getByText, getByTestId } = render(
          <Price sampleData={sampleData} />,
        );
        expect(Price).toBeInTheDocument();
      }
    }
  });
});
