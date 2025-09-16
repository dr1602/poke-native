import { useState } from 'react';

import {
  addFavouritePokemonData,
  deleteSingleFavouritePokemonData,
  getFavouritePokemonsData,
} from '@/chore/services/favouritesDataStorageService';
import { removeDuplicates } from '@/utils/removeDuplicates';
import { PokemonFinalExtendedData } from '@/utils/types/PokeTypes';

export const useModifyFavouritesLargerData = () => {
  const [
    isLoadingModifyFavouritesLargerData,
    setIsLoadingModifyFavouritesLargerData,
  ] = useState<boolean>(false);

  const modifyFavouritesLargerData = async (
    pokemonData: PokemonFinalExtendedData | undefined
  ) => {
    try {
      setIsLoadingModifyFavouritesLargerData(true);
      if (!pokemonData) return;

      const favourites: PokemonFinalExtendedData[] =
        await getFavouritePokemonsData();

      const uniqueFavourites = removeDuplicates(favourites);
      const isPokemonSaved = uniqueFavourites.some(
        (fav) => fav.id === pokemonData.id
      );

      if (!isPokemonSaved) {
        // si no existe el pokemon en el array, lo añade
        await addFavouritePokemonData(pokemonData);
      } else {
        // si ya existe el pokemon en el array, lo elimina
        await deleteSingleFavouritePokemonData(pokemonData);
      }
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingModifyFavouritesLargerData(false);
    }
  };

  return { isLoadingModifyFavouritesLargerData, modifyFavouritesLargerData };
};
