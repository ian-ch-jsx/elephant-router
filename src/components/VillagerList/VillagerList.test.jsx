import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import VillagerList from './VillagerList';

test('should render a list of villagers', () => {
  render(
    <MemoryRouter>
      <VillagerList
        villagers={[
          {
            id: 1,
            'file-name': 'ant00',
            name: {
              'name-USen': 'Cyrano',
              'name-EUen': 'Cyrano',
              'name-EUde': 'Theo',
              'name-EUes': 'Cirano',
              'name-USes': 'Cirano',
              'name-EUfr': 'Cyrano',
              'name-USfr': 'Cyrano',
              'name-EUit': 'Cirano',
              'name-EUnl': 'Cyrano',
              'name-CNzh': '阳明',
              'name-TWzh': '陽明',
              'name-JPja': 'さくらじま',
              'name-KRko': '사지마',
              'name-EUru': 'Сирано',
            },
            personality: 'Cranky',
            'birthday-string': 'March 9th',
            birthday: '9/3',
            species: 'Anteater',
            gender: 'Male',
            subtype: 'B',
            hobby: 'Education',
            'catch-phrase': 'ah-CHOO',
            icon_uri: 'https://acnhapi.com/v1/icons/villagers/1',
            image_uri: 'https://acnhapi.com/v1/images/villagers/1',
            'bubble-color': '#194c89',
            'text-color': '#fffad4',
            saying: "Don't punch your nose to spite your face.",
            'catch-translations': {
              'catch-USen': 'ah-CHOO',
              'catch-EUen': 'ah-CHOO',
              'catch-EUde': 'schneuf',
              'catch-EUes': 'achús',
              'catch-USes': 'achús',
              'catch-EUfr': 'ATCHOUM',
              'catch-USfr': 'ATCHOUM',
              'catch-EUit': 'ett-CCIÙ',
              'catch-EUnl': 'ha-TSJOE',
              'catch-CNzh': '有的',
              'catch-TWzh': '有的',
              'catch-JPja': 'でごわす',
              'catch-KRko': '임돠',
              'catch-EUru': 'апчхи',
            },
          },
        ]}
      />
    </MemoryRouter>
  );

  const profile = screen.getByRole('img', { name: /profile/i });
  expect(profile).toBeInTheDocument();
});
