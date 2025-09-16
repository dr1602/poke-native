import { useCallback, useState } from 'react';

import {
  deleteAllFavouritePokemons,
  getFavouritePokemonsId,
} from '@/chore/services/favouritesIdStorageService';
import { PokemonFinalExtendedData } from '@/utils/types/PokeTypes';

export const useDeleteAllFavouritesData = () => {
  const [isLoadingDeleteAllData, setIsLoadingDeleteAllData] =
    useState<boolean>(false);

  const deleteAllFavouritesData = useCallback(async () => {
    try {
      setIsLoadingDeleteAllData(true);
      await deleteAllFavouritePokemons();
      const favourites: PokemonFinalExtendedData[] =
        await getFavouritePokemonsId();
    } catch (error) {
      console.error('Error deleting favourites:', error);
    } finally {
      setIsLoadingDeleteAllData(false);
    }
  }, []);

  return {
    isLoadingDeleteAllData,
    deleteAllFavouritesData,
  };
};
