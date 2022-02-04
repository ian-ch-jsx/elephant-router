import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Villager from './views/Villager/Villager';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Animal crossing villagers/i);
  expect(linkElement).toBeInTheDocument();
});
