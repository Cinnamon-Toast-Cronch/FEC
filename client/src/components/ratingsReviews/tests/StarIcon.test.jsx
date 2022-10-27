import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StarIcon from '../StarIcon.jsx';

afterEach(cleanup);

describe('StarIcon', () => {
  it('Should call the provided onClick function when clicked and pass in the star prop if an onClick function is provided', (done) => {
    userEvent.setup();

    let result;

    const { container } = render(
      <StarIcon
        fillStyle="full"
        star={2}
        onClick={(star) => {
          result = star;
        }}
      />
    );

    userEvent.click(container.firstChild).then(() => {
      expect(result).toBe(2);
      done();
    });
  });

  it('Should contain an image that contains a clip style attribute which display only a portion of the image based on the fill style provided', () => {
    const { container } = render(
      <StarIcon fillStyle="half" star={2} onClick={() => {}} />
    );

    expect(container.firstChild.firstChild).toHaveStyle({
      clip: 'rect(0, 10px, 20px, 0)',
    });
  });
});
