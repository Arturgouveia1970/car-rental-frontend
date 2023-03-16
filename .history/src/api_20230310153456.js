import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://alpha-vantage.p.rapidapi.com',
  headers: {
    'content-type':'application/octet-stream',
    'x-rapidapi-host':'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': process.env.RAPIDAPI_KEY
  }
});

export default {
  stockTimeSeries: (symbol) =>
  instance({
    'method':'GET',
    'url':'/query',
    'params': {
      'outputsize':'compact',
      'datatype':'json',
      'function':'TIME_SERIES_DAILY_ADJUSTED',
      'symbol': symbol.toUpperCase()
    },
  })
}