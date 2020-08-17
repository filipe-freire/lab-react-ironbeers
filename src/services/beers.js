import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com',
});

export const loadBeers = () => {
  return instance.get('/beers').then((response) => {
    const data = response.data;
    return data;
  });
};

export const loadSingleBeer = (id) => {
  return instance.get(`/beers/${id}`).then((response) => {
    const data = response.data;
    return data;
  });
};
