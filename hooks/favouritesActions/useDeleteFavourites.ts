import { useState } from 'react';

import {
  deleteFavouritePokemon,
  getFavouritePokemons,
} from '@/services/favouritesService';

export const useDeleteFavourites = () => {
  const [isLoadingDeleteFavourites, setIsLoadingDeleteFavourites] =
    useState<boolean>(false);
  const [pokemonFavouritesList, setPokemonFavouritesList] = useState<number[]>(
    []
  );

  const deleteFavourite = async (pokemonId: number | undefined) => {
    try {
      setIsLoadingDeleteFavourites(true);
      if (!pokemonId) return;

      const favourites = await getFavouritePokemons();
      setPokemonFavouritesList(favourites);
      const isPokemonSaved = pokemonFavouritesList.includes(pokemonId);

      if (isPokemonSaved) {
        await deleteFavouritePokemon(pokemonId);
      }
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingDeleteFavourites(false);
    }
  };

  return { isLoadingDeleteFavourites, deleteFavourite };
};
