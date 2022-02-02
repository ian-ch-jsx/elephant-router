import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Animal crossing villagers/i);
  expect(linkElement).toBeInTheDocument();
});
