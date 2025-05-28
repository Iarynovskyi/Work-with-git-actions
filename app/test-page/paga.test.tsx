import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Test from './page';

describe('Test Component', () => {
  it('renders the Test component correctly', () => {
    render(<Test />);
    const aboutElement = screen.getByText(/Hello, Next.js!/i);
    expect(aboutElement).toMatchSnapshot();
  });
});
