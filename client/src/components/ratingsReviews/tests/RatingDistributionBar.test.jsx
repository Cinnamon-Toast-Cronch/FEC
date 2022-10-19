import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RatingDistributionBar from '../RatingDistributionBar.jsx';

afterEach(cleanup);

describe('Rating distribution bar', () => {
  test('rating distribution bar should be a distribution backgrou that contains a distribution foreground', () => {
    const { container } = render(
      <RatingDistributionBar ratingCount={5} totalRatingCount={10} />
    );

    const backgroundElement = container.firstChild;
    const foregroundElement = backgroundElement.firstChild;

    expect(backgroundElement.tagName).toBe('DIV');
    expect(backgroundElement).toHaveClass('distribution-background');
    expect(foregroundElement.tagName).toBe('DIV');
    expect(foregroundElement).toHaveClass('distribution-foreground');
  });

  test('distribution-foreground should have a width of 0% when there are no ratings for that rating ', () => {
    const { container } = render(
      <RatingDistributionBar ratingCount={0} totalRatingCount={10} />
    );

    const foregroundElement = container.firstChild.firstChild;

    expect(foregroundElement).toHaveStyle({
      width: '0%',
    });
  });

  test('distribution-foreground should have a width of 50% when the rating count for that rating is half of the total ratings', () => {
    const { container } = render(
      <RatingDistributionBar ratingCount={5} totalRatingCount={10} />
    );

    const foregroundElement = container.firstChild.firstChild;

    expect(foregroundElement).toHaveStyle({
      width: '50%',
    });
  });

  test('distribution-foreground shoudl have a width of 100% when the rating count for that rating equals the totalRatingCount', () => {
    const { container } = render(
      <RatingDistributionBar ratingCount={10} totalRatingCount={10} />
    );

    const foregroundElement = container.firstChild.firstChild;

    expect(foregroundElement).toHaveStyle({
      width: '100%',
    });
  });
});
