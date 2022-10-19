import { render, screen } from '@testing-library/react';
import React from 'react';
import jest from 'jest';
import renderer from 'react-test-renderer';
import App from '../components/app.jsx';

describe('App Tests', () => {
  it('should contain title', () => {
    render(<App />);
    const heading = screen.getByText('App Title: Hello World');
    expect(heading).toBeInTheDocument();
  });
});
