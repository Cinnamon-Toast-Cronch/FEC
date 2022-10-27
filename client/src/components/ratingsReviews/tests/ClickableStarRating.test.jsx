import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClickableStarRating from '../ClickableStarRating.jsx';

jest.mock('../StarIcon.jsx', () => ({ star, onClick }) => (
  <button
    data-testid={`star-icon-${star}`}
    type="button"
    onClick={() => {
      onClick(star);
    }}
  >
    click
  </button>
));

afterEach(cleanup);

describe('ClickableStarRating', () => {
  it('Should change which ratingDescription is shown when StarRating is clicked', (done) => {
    userEvent.setup();

    const { getByTestId, getByText } = render(
      <ClickableStarRating onChange={() => {}} />
    );

    [
      { star: 1, text: 'Poor' },
      { star: 2, text: 'Fair' },
      { star: 3, text: 'Average' },
      { star: 4, text: 'Good' },
      { star: 5, text: 'Great' },
    ]
      .reduce(
        (prev, current) =>
          prev
            .then(() =>
              userEvent.click(getByTestId(`star-icon-${current.star}`))
            )
            .then(() => expect(getByText(current.text)).toBeInTheDocument()),
        Promise.resolve()
      )
      .then(() => done());
  });

  it('Should call the onChange function when the StarRating is clicked', (done) => {
    userEvent.setup();

    let result;

    const { getByTestId } = render(
      <ClickableStarRating
        onChange={(e) => {
          result = e;
        }}
      />
    );

    userEvent.click(getByTestId('star-icon-1')).then(() => {
      expect(result).toEqual({ target: { value: '1', name: 'rating' } });
      done();
    });
  });
});
