import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VillagerDetail from './VillagerDetail';

test('villager image is rendered on detail page', async () => {
  render(
    <MemoryRouter>
      <VillagerDetail
        villagerDetails={{
          id: 4,
          'file-name': 'ant03',
          name: {
            'name-USen': 'Anabelle',
            'name-EUen': 'Anabelle',
            'name-EUde': 'Annabell',
            'name-EUes': 'Anabel',
            'name-USes': 'Anabel',
            'name-EUfr': 'Anabelle',
            'name-USfr': 'Anabelle',
            'name-EUit': 'Annalisa',
            'name-EUnl': 'Anabelle',
            'name-CNzh': '有美',
            'name-TWzh': '有美',
            'name-JPja': 'あるみ',
            'name-KRko': '아롱이',
            'name-EUru': 'Анабель',
          },
          personality: 'Peppy',
          'birthday-string': 'February 16th',
          birthday: '16/2',
          species: 'Anteater',
          gender: 'Female',
          subtype: 'B',
          hobby: 'Fashion',
          'catch-phrase': 'snorty',
          icon_uri: 'https://acnhapi.com/v1/icons/villagers/4',
          image_uri: 'https://acnhapi.com/v1/images/villagers/4',
          'bubble-color': '#ff791f',
          'text-color': '#fff2bb',
          saying: "Dance like no one's watching!",
          'catch-translations': {
            'catch-USen': 'snorty',
            'catch-EUen': 'snorty',
            'catch-EUde': 'puuust',
            'catch-EUes': 'esnoink',
            'catch-USes': 'fa-fiú',
            'catch-EUfr': 'grognon',
            'catch-USfr': 'grognon',
            'catch-EUit': 'snorty',
            'catch-EUnl': 'snork',
            'catch-CNzh': '真的假的',
            'catch-TWzh': '真的假的',
            'catch-JPja': 'マジでー',
            'catch-KRko': '정말',
            'catch-EUru': 'хрум-хрум',
          },
        }}
      />
    </MemoryRouter>
  );
  screen.debug();
  const profile = await screen.getByAltText(/profile/i);
  expect(profile).toBeInTheDocument();
});
