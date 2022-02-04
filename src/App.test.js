import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Animal crossing villagers/i);
  expect(linkElement).toBeInTheDocument();
});

test('clicking an image links to a detail page', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const link = screen.getByRole(
    'link',
    { name: /animal crossing villagers/i },
    { skipHover: true }
  );

  screen.debug(link);

  userEvent.click(link);
});
