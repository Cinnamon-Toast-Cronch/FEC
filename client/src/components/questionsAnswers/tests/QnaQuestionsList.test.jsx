/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuestionsList from './C-QuestionsList.jsx';

afterEach(cleanup);

jest.mock('./C-QuestionsList.jsx', () => () => (
  <div data-testid="questionsList" />
));

describe('Questions list component breakdown', () => {
  it('should contain a list of questions populated as cards', () => {
    const product = {
      id: 40346,
    };
    const { getByTestId } = render(
      <QnaWidget product={product} />,
    );

    expect(getByTestId('questionsList')).toBeInTheDocument();
  });
});
