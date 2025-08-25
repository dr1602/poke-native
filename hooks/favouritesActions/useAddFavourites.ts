import { useState } from 'react';

import {
  addFavouritePokemon,
  getFavouritePokemons,
} from '@/services/favouritesService';

export const useAddFavourites = () => {
  const [isLoadingAddFavourites, setIsLoadingAddFavourites] =
    useState<boolean>(false);
  const [pokemonFavouritesList, setPokemonFavouritesList] = useState<number[]>(
    []
  );

  const addFavourite = async (pokemonId: number | undefined) => {
    try {
      setIsLoadingAddFavourites(true);
      if (!pokemonId) return;

      const favourites = await getFavouritePokemons();
      setPokemonFavouritesList(favourites);
      const isPokemonSaved = pokemonFavouritesList.includes(pokemonId);

      if (!isPokemonSaved) {
        await addFavouritePokemon(pokemonId);
      }
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingAddFavourites(false);
    }
  };

  return { isLoadingAddFavourites, addFavourite };
};
