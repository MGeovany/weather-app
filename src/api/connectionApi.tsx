import axios from "axios";

export const conexionAPI = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5/weather?appid=0b1d8dc54b4fbddf609cade05ca3f715'
});