import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Modal from '../Modal.jsx';

afterEach(cleanup);

describe('Modal', () => {
  it('Should render all of the child components', () => {
    const { getByTestId } = render(
      <Modal>
        <div data-testid="div1">
          <div data-testid="div2" />
        </div>
        <div data-testid="div3" />
      </Modal>
    );

    expect(getByTestId('div1')).toBeInTheDocument();
    expect(getByTestId('div2')).toBeInTheDocument();
    expect(getByTestId('div3')).toBeInTheDocument();
  });

  it('Should apply the no-scroll class to the body when mounted and remove it when unmounted', () => {
    const { baseElement, unmount } = render(<Modal />);

    expect(baseElement).toHaveClass('no-scroll');

    unmount();

    expect(baseElement).not.toHaveClass('no-scroll');
  });
});
