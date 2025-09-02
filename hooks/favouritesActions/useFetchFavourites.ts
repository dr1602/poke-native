import { useCallback, useEffect, useState } from 'react';

import { getFavouritePokemons } from '@/services/favouritesService';
import { useFavouritesStore } from '@/store/favouritesStore';
import { removeDuplicates } from '@/utils/removeDuplicates';

export const useFetchFavourites = (pokemonId: number | undefined) => {
  const { currentFavouritesData, setFavouritesData } = useFavouritesStore();
  const [isPokemonSaved, setIsPokemonSaved] = useState<boolean>(false);
  const [isLoadingFetchFavourites, setIsLoadingFetchFavourites] =
    useState<boolean>(false);

  const fetchFavourites = useCallback(async () => {
    try {
      setIsLoadingFetchFavourites(true);
      const favourites: number[] = await getFavouritePokemons();
      const uniqueFavourites = removeDuplicates(favourites);
      setFavouritesData(uniqueFavourites);
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingFetchFavourites(false);
    }
  }, []);

  useEffect(() => {
    if (pokemonId) {
      const isSaved = currentFavouritesData.includes(pokemonId);
      setIsPokemonSaved(isSaved);
    }
  }, [currentFavouritesData, pokemonId]);

  return {
    isPokemonSaved,
    isLoadingFetchFavourites,
    fetchFavourites,
  };
};
