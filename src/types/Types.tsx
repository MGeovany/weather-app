export interface WeatherResponse {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  data: WeatherData[];
}

export interface WeatherData {
  degrees: number;
  humidity: number;
  temp_min: number;
  cloudiness: number;
  temp: number;
  city: string;
  pressure: number;

  name: any;
}

export interface ImageData {
  id: number;
  largeImageURL: string;
}
