import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('renders header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Animal crossing villagers/i);
  expect(linkElement).toBeInTheDocument();
});
