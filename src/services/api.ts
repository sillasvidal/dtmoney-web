import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dtmoneyignite.herokuapp.com'
});