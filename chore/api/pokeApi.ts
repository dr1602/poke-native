import { API_HOST } from '@/utils/constants/constants';

const getPokeApi = async () => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
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

export { getPokeApi, getPokemonDetailsByUrlApi };
