import axios from 'axios';
import { StormGlass } from '@src/clients/stormGlass';
import stormGlass3Hours from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlass3HoursNormalized from '@test/fixtures/stormglass_normalized_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('Should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    axios.get = jest.fn().mockResolvedValue(stormGlass3Hours);

    const stormGlass = new StormGlass(axios);
    const response   = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual(stormGlass3HoursNormalized);
  });
});
