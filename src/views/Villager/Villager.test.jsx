import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Villager from './Villager';

test('detail page loads the correct villager', async () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/4' }]}>
      <Route path="/:id">
        <Villager />
      </Route>
    </MemoryRouter>
  );
  const name = await screen.findByText(/anabelle/i);
  expect(name).toBeInTheDocument();
});
