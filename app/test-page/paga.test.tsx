import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Test from './page';

it('renders the Test component correctly', async () => {
  render(<Test />);
  const aboutElement = await screen.findByText(/Hello, Next.js!!/i);
  expect(aboutElement).toBeInTheDocument();
});
