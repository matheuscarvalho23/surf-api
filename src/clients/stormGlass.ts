import { AxiosStatic } from 'axios';

export interface StormGlassSource {
  [key: string]: number;
}

export interface StormGlassPoint {
  readonly time: string;
  readonly waveHeight: StormGlassSource;
}
export interface StormGlassResponse {

}


export class StormGlass {
  readonly stormGlassApiParams = 'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
  readonly stormGlassApiSource = 'noaa';

  constructor(protected request: AxiosStatic) {}

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    return this.request.get(
      `https://api.stormglass.io/v2/weather/point?params=${this.stormGlassApiParams}&source=${this.stormGlassApiSource}&lat=${lat}lng=${lng}`
    );
  }
}
