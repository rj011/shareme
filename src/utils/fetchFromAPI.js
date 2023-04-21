
const axios = require("axios");
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  
  params: {
    
    maxResults: '50',
    order: 'date',
    part: 'snippet,id',
    regionCode: 'UK'
  },
  headers: {
    'X-RapidAPI-Key': '7726c2810dmsh1a7cb1919bab000p113a68jsn3866080881cc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const {data} =  await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}