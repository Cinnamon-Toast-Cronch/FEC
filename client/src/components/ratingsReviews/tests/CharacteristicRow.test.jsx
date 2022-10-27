import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacteristicRow from '../CharacteristicRow.jsx';

afterEach(cleanup);

describe('CharacteristicRow', () => {
  it('Should change the displayed value description when selection is clicked ', (done) => {
    userEvent.setup();

    const { getByText } = render(
      <CharacteristicRow
        characteristic="Length"
        characteristicId={1}
        onSelection={() => {}}
        required={null}
      />
    );

    expect(getByText('None selected')).toBeInTheDocument();

    userEvent
      .click(document.querySelector('label[for=review-Length-1] input'))
      .then(() => {
        expect(getByText('Runs short')).toBeInTheDocument();
        done();
      });
  });

  it('Should call onSelection when selection is clicked', (done) => {
    userEvent.setup();

    let result;

    render(
      <CharacteristicRow
        characteristic="Length"
        characteristicId={1}
        onSelection={(e) => {
          result = e;
        }}
        required={null}
      />
    );

    userEvent
      .click(document.querySelector('label[for=review-Length-1] input'))
      .then(() => {
        expect(result.target.name).toBe('1');
        expect(result.target.value).toBe('1');
        done();
      });
  });
});
