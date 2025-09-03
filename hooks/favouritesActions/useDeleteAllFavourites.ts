import { useCallback, useState } from 'react';

import {
  deleteAllFavouritePokemons,
  getFavouritePokemons,
} from '@/chore/services/favouritesIdStorageService';
import { useFavouritesStore } from '@/store/favouritesStore';

export const useDeleteAllFavourites = () => {
  const { setFavouritesData } = useFavouritesStore();
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  const deleteFavourites = useCallback(async () => {
    try {
      setIsLoadingDelete(true);
      await deleteAllFavouritePokemons();
      const favourites: number[] = await getFavouritePokemons();
      setFavouritesData(favourites);
    } catch (error) {
      console.error('Error deleting favourites:', error);
    } finally {
      setIsLoadingDelete(false);
    }
  }, []);

  return {
    isLoadingDelete,
    deleteFavourites,
  };
};
