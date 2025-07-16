import { API_HOST } from '@/utils/constants/apiConstants';

const getPokeApi = async (nexEndpointUrl: string) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(!!nexEndpointUrl ? nexEndpointUrl : url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const getPokemonDetailsByUrlApi = async (url: string) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const getPokemonDetailsById = async (id: string) => {
  try {
    const url = `${API_HOST}pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export { getPokeApi, getPokemonDetailsById, getPokemonDetailsByUrlApi };
