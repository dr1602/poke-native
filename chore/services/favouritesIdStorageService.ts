import AsyncStorage from '@react-native-async-storage/async-storage';

import { FAVOURITE_STORAGE_ID_KEY } from '@/utils/constants/favouriteStorageConstants';

export const addFavouritePokemonId = async (pokemonId: number | undefined) => {
  try {
    const favouritePokemons = [...(await getFavouritePokemonsId())];
    favouritePokemons.push(pokemonId);
    await AsyncStorage.setItem(
      FAVOURITE_STORAGE_ID_KEY,
      JSON.stringify(favouritePokemons)
    );
  } catch (error) {
    console.error('Error agregando pokemon', error);
  }
};

export const getFavouritePokemonsId = async () => {
  try {
    const responseFavourites = await AsyncStorage.getItem(
      FAVOURITE_STORAGE_ID_KEY
    );
    return responseFavourites ? JSON.parse(responseFavourites) : [];
  } catch (error) {
    console.error('Error obteniendo pokemons favoritos', error);
  }
};

export const deleteSingleFavouritePokemonId = async (pokemonId: number) => {
  try {
    const responseFavourites = await AsyncStorage.getItem(
      FAVOURITE_STORAGE_ID_KEY
    );
    if (responseFavourites) {
      const favouritesPokemons = JSON.parse(responseFavourites) as number[];
      const filteredFavourites = favouritesPokemons.filter(
        (id) => id !== pokemonId
      );
      await AsyncStorage.setItem(
        FAVOURITE_STORAGE_ID_KEY,
        JSON.stringify(filteredFavourites)
      );
    }
  } catch (error) {
    console.error('Error eliminando pokemon', error);
  }
};

export const deleteAllFavouritePokemons = async () => {
  try {
    const favouritePokemons: number[] = [];
    await AsyncStorage.setItem(
      FAVOURITE_STORAGE_ID_KEY,
      JSON.stringify(favouritePokemons)
    );
  } catch (error) {
    console.error('Error eliminando pokemons', error);
  }
};
