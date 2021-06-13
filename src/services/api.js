import axios from 'axios'

// key: a3e067ec908703bc60506560deafb4fc50186c69

// base url: https://api-ssl.bitly.com/v4/

export const key = 'a3e067ec908703bc60506560deafb4fc50186c69'

const api = axios.create({
   baseURL: 'https://api-ssl.bitly.com/v4',
   headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
   }
});

export default api;