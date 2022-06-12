export interface WeatherResponse {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface WeatherData {
  id: number;
  degrees: number;
  humidity: number;
  temp_min: number;
  cloudiness: number;
}
