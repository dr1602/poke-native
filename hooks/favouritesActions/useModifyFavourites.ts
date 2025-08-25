import { useState } from 'react';

import {
  addFavouritePokemon,
  deleteFavouritePokemon,
  getFavouritePokemons,
} from '@/services/favouritesService';

export const useModifyFavourites = () => {
  const [isLoadingModifyFavourites, setIsLoadingModifyFavourites] =
    useState<boolean>(false);

  const modifyFavourites = async (pokemonId: number | undefined) => {
    try {
      setIsLoadingModifyFavourites(true);
      if (!pokemonId) return;

      const favourites: number[] = await getFavouritePokemons();

      const isPokemonSaved = favourites.includes(pokemonId);

      if (!isPokemonSaved) {
        // si no existe el pokemon en el array, lo añade
        await addFavouritePokemon(pokemonId);
      } else {
        // si ya existe el pokemon en el array, lo elimina
        await deleteFavouritePokemon(pokemonId);
      }
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingModifyFavourites(false);
    }
  };

  return { isLoadingModifyFavourites, modifyFavourites };
};
