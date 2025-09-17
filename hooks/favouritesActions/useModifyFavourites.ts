import { useState } from 'react';

import {
  addFavouritePokemonId,
  deleteSingleFavouritePokemonId,
  getFavouritePokemonsId,
} from '@/chore/services/favouritesIdStorageService';
import { removeDuplicates } from '@/utils/removeDuplicates';

export const useModifyFavourites = () => {
  const [isLoadingModifyFavourites, setIsLoadingModifyFavourites] =
    useState<boolean>(false);

  const modifyFavourites = async (pokemonId: number | undefined) => {
    try {
      setIsLoadingModifyFavourites(true);
      if (!pokemonId) return;

      const favourites: number[] = await getFavouritePokemonsId();
      const uniqueFavourites = removeDuplicates(favourites);
      const isPokemonSaved = uniqueFavourites.includes(pokemonId);

      if (!isPokemonSaved) {
        // si no existe el pokemon en el array, lo añade
        await addFavouritePokemonId(pokemonId);
      } else {
        // si ya existe el pokemon en el array, lo elimina
        await deleteSingleFavouritePokemonId(pokemonId);
      }
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingModifyFavourites(false);
    }
  };

  return { isLoadingModifyFavourites, modifyFavourites };
};
