import AsyncStorage from '@react-native-async-storage/async-storage';

import { FAVOURITE_STORAGE_KEY } from '@/utils/constants/favouriteStorageConstants';

export const addFavouritePokemon = async (pokemonId: number) => {
  try {
    const favouritePokemons = [];
    favouritePokemons.push(pokemonId);
    await AsyncStorage.setItem(
      FAVOURITE_STORAGE_KEY,
      JSON.stringify(favouritePokemons)
    );
  } catch (error) {
    console.error('Error agregando pokemon', error);
  }
};

export const getFavouritePokemons = async () => {
  try {
    const responseFavourites = await AsyncStorage.getItem(
      FAVOURITE_STORAGE_KEY
    );
    return responseFavourites ? JSON.parse(responseFavourites) : [];
  } catch (error) {
    console.error('Error obteniendo pokemons favoritos', error);
  }
};
