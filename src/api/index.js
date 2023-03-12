import axios from "axios";

export const pokemonQuerry = async (url, params) => {
  const response = await axios.get(url, { params });
  
  return response.data;
};
