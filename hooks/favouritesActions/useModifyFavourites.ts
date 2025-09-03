import { useState } from 'react';

import {
  addFavouritePokemon,
  deleteSingleFavouritePokemon,
  getFavouritePokemons,
} from '@/chore/services/favouritesService';
import { removeDuplicates } from '@/utils/removeDuplicates';

export const useModifyFavourites = () => {
  const [isLoadingModifyFavourites, setIsLoadingModifyFavourites] =
    useState<boolean>(false);

  const modifyFavourites = async (pokemonId: number | undefined) => {
    try {
      setIsLoadingModifyFavourites(true);
      if (!pokemonId) return;

      const favourites: number[] = await getFavouritePokemons();
      const uniqueFavourites = removeDuplicates(favourites);
      const isPokemonSaved = uniqueFavourites.includes(pokemonId);

      if (!isPokemonSaved) {
        // si no existe el pokemon en el array, lo añade
        await addFavouritePokemon(pokemonId);
      } else {
        // si ya existe el pokemon en el array, lo elimina
        await deleteSingleFavouritePokemon(pokemonId);
      }
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingModifyFavourites(false);
    }
  };

  return { isLoadingModifyFavourites, modifyFavourites };
};
