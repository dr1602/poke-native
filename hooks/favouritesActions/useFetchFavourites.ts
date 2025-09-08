import { useCallback, useEffect, useState } from 'react';

import { getFavouritePokemons } from '@/chore/services/favouritesIdStorageService';
import { useFavouritesByIdStore } from '@/store/favouritesStore';
import { removeDuplicates } from '@/utils/removeDuplicates';

export const useFetchFavourites = (pokemonId: number | undefined) => {
  const { currentFavouritesByIdData, setFavouritesByIdData } =
    useFavouritesByIdStore();
  const [isPokemonSaved, setIsPokemonSaved] = useState<boolean>(false);
  const [isLoadingFetchFavourites, setIsLoadingFetchFavourites] =
    useState<boolean>(false);

  const fetchFavourites = useCallback(async () => {
    try {
      setIsLoadingFetchFavourites(true);
      const favourites: number[] = await getFavouritePokemons();
      const uniqueFavourites = removeDuplicates(favourites);
      setFavouritesByIdData(uniqueFavourites);
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingFetchFavourites(false);
    }
  }, []);

  useEffect(() => {
    if (pokemonId) {
      const isSaved = currentFavouritesByIdData.includes(pokemonId);
      setIsPokemonSaved(isSaved);
    }
  }, [currentFavouritesByIdData, pokemonId]);

  return {
    isPokemonSaved,
    isLoadingFetchFavourites,
    fetchFavourites,
  };
};
