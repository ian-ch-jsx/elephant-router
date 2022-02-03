import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Villager from './views/Villager/Villager';

test.skip('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Animal crossing villagers/i);
  expect(linkElement).toBeInTheDocument();
});

// test.only('clicking a villager profile leads to details page', async () => {
//   render(
//     <MemoryRouter initialEntries={['/', { pathname: '/3' }]}>
//       <Villager />
//     </MemoryRouter>
//   );
//   const name = await screen.findByText(/pango/i);
//   expect(name).toBeInTheDocument();
// });
