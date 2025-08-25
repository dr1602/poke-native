import { useState } from 'react';

import { addFavouritePokemon } from '@/services/favouritesService';

export const useAddFavourites = (pokemonId: number | undefined) => {
  const [isLoadingAddFavourites, setIsLoadingAddFavourites] =
    useState<boolean>(false);

  const addFavourite = async () => {
    try {
      setIsLoadingAddFavourites(true);
      await addFavouritePokemon(pokemonId);
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingAddFavourites(false);
    }
  };

  return { isLoadingAddFavourites, addFavourite };
};
