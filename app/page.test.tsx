import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

it('renders the Home component correctly', async () => {
  render(<Home />);
  const aboutElement = await screen.findByText(/Hello/i);
  expect(aboutElement).toBeInTheDocument();
});
