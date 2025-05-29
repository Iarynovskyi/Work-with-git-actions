import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Test Home', () => {
  it('renders the Home component correctly', () => {
    render(<Home />);
    const aboutElement = screen.getByText('Hello');
    expect(aboutElement).toMatchSnapshot();
  });
});
