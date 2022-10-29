import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RatingDistributionBar from '../RatingDistributionBar.jsx';

afterEach(cleanup);

describe('Rating distribution bar', () => {
  test('rating distribution bar should be a singular div', () => {
    const { container } = render(
      <RatingDistributionBar ratingCount={5} totalRatingCount={10} />
    );

    const backgroundElement = container.firstChild;

    expect(backgroundElement.tagName).toBe('DIV');
    expect(backgroundElement).toHaveClass('distribution-background');
  });

  test('distribution-background gradient should have a color stop of 0% when there are no ratings for that rating', () => {
    const { container } = render(
      <RatingDistributionBar ratingCount={0} totalRatingCount={10} />
    );

    const backgroundElement = container.firstChild;

    expect(backgroundElement).toHaveStyle({
      background: 'linear-gradient(90deg, #73b98c 0%, #707070 0%)',
    });
  });

  test('distribution-background gradient should have a color stop of 50% when the rating count for that rating is half of the total ratings', () => {
    const { container } = render(
      <RatingDistributionBar ratingCount={5} totalRatingCount={10} />
    );

    const backgroundElement = container.firstChild;

    expect(backgroundElement).toHaveStyle({
      background: 'linear-gradient(90deg, #73b98c 50%, #707070 50%)',
    });
  });

  test('distribution-background gradient should have a color stop of 100% when the rating count for that rating equals the totalRatingCount', () => {
    const { container } = render(
      <RatingDistributionBar ratingCount={10} totalRatingCount={10} />
    );

    const backgroundElement = container.firstChild;

    expect(backgroundElement).toHaveStyle({
      background: 'linear-gradient(90deg, #73b98c 100%, #707070 100%)',
    });
  });
});
