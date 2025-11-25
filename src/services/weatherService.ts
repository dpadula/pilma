import axios from 'axios';
import Constants from 'expo-constants';

const { openWeatherKey } = Constants.expoConfig!.extra as {
  openWeatherKey: string;
};

export const weatherService = {
  async getCurrentWeatherByCoords(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}&lang=es`;
    const r = await axios.get(url);
    return r.data;
  },

  async getForecastByCoords(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}&lang=es`;
    const r = await axios.get(url);
    return r.data;
  },
};
