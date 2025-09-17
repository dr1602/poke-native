import { useCallback, useEffect, useState } from 'react';

import { getFavouritePokemonsData } from '@/chore/services/favouritesDataStorageService';
import { PokemonFinalExtendedData } from '@/utils/types/PokeTypes';

export const useFetchFavouritesData = () => {
  const [allFavouritesData, setAllFavouritesData] =
    useState<PokemonFinalExtendedData[]>();
  const [isLoadingFetchFavourites, setIsLoadingFetchFavourites] =
    useState<boolean>(false);

  const fetchFavourites = useCallback(async () => {
    try {
      setIsLoadingFetchFavourites(true);
      const favourites: PokemonFinalExtendedData[] =
        await getFavouritePokemonsData();
      setAllFavouritesData(favourites);
    } catch (error) {
      console.error('Error fetching favourites:', error);
    } finally {
      setIsLoadingFetchFavourites(false);
    }
  }, []);

  useEffect(() => {
    fetchFavourites();
  }, [fetchFavourites]);

  return {
    isLoadingFetchFavourites,
    fetchFavourites,
    allFavouritesData,
  };
};
