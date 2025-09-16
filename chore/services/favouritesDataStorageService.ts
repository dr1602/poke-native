import AsyncStorage from '@react-native-async-storage/async-storage';

import { FAVOURITE_STORAGE_DATA_KEY } from '@/utils/constants/favouriteStorageConstants';
import { PokemonFinalExtendedData } from '@/utils/types/PokeTypes';

export const addFavouritePokemonData = async (
  pokemonData: PokemonFinalExtendedData | undefined
) => {
  try {
    if (!pokemonData) return;

    const favouritePokemons = [...(await getFavouritePokemonsData())];
    favouritePokemons.push(pokemonData);
    await AsyncStorage.setItem(
      FAVOURITE_STORAGE_DATA_KEY,
      JSON.stringify(favouritePokemons)
    );
  } catch (error) {
    console.error('Error agregando pokemon', error);
  }
};

export const getFavouritePokemonsData = async () => {
  try {
    const responseFavourites = await AsyncStorage.getItem(
      FAVOURITE_STORAGE_DATA_KEY
    );
    return responseFavourites ? JSON.parse(responseFavourites) : [];
  } catch (error) {
    console.error('Error obteniendo pokemons favoritos', error);
  }
};

export const deleteSingleFavouritePokemonData = async (
  pokemonData: PokemonFinalExtendedData
) => {
  try {
    const responseFavourites = await AsyncStorage.getItem(
      FAVOURITE_STORAGE_DATA_KEY
    );
    if (responseFavourites) {
      const favouritesPokemons = JSON.parse(
        responseFavourites
      ) as PokemonFinalExtendedData[];
      const filteredFavourites = favouritesPokemons.filter(
        (id) => id !== pokemonData
      );
      await AsyncStorage.setItem(
        FAVOURITE_STORAGE_DATA_KEY,
        JSON.stringify(filteredFavourites)
      );
    }
  } catch (error) {
    console.error('Error eliminando pokemon', error);
  }
};

export const deleteAllFavouritePokemonsData = async () => {
  try {
    const favouritePokemons: PokemonFinalExtendedData[] = [];
    await AsyncStorage.setItem(
      FAVOURITE_STORAGE_DATA_KEY,
      JSON.stringify(favouritePokemons)
    );
  } catch (error) {
    console.error('Error eliminando pokemons', error);
  }
};
