import { useCallback, useState } from 'react';

import {
  deleteAllFavouritePokemons,
  getFavouritePokemons,
} from '@/chore/services/favouritesIdStorageService';
import { useFavouritesByIdStore } from '@/store/favouritesStore';

export const useDeleteAllFavourites = () => {
  const { setFavouritesByIdData } = useFavouritesByIdStore();
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  const deleteFavourites = useCallback(async () => {
    try {
      setIsLoadingDelete(true);
      await deleteAllFavouritePokemons();
      const favourites: number[] = await getFavouritePokemons();
      setFavouritesByIdData(favourites);
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
