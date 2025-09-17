import { useCallback, useState } from 'react';

import {
  deleteAllFavouritePokemons,
  getFavouritePokemonsId,
} from '@/chore/services/favouritesIdStorageService';
import { useFavouritesByIdStore } from '@/store/favouritesByIdStore';

export const useDeleteAllFavourites = () => {
  const { setFavouritesByIdData } = useFavouritesByIdStore();
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  const deleteFavourites = useCallback(async () => {
    try {
      setIsLoadingDelete(true);
      await deleteAllFavouritePokemons();
      const favourites: number[] = await getFavouritePokemonsId();
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
