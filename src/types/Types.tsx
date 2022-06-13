export interface WeatherResponse {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  data: WeatherData[];
}

export interface WeatherData {
  temp: number;

  temp_min: number;
  pressure: number;
  humidity: number;
  temp_max: number;
  city: string;
}

export interface Weather {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: WeatherData;
}

export interface ImageData {
  id: number;
  url: string;
  src: {
    original: string;
    small: string;
    alt: string;
  };
}
