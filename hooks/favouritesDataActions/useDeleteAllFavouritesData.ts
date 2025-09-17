import { useCallback, useState } from 'react';

import { deleteAllFavouritePokemonsData } from '@/chore/services/favouritesDataStorageService';

export const useDeleteAllFavouritesData = () => {
  const [isLoadingDeleteAllData, setIsLoadingDeleteAllData] =
    useState<boolean>(false);

  const deleteAllFavouritesData = useCallback(async () => {
    try {
      setIsLoadingDeleteAllData(true);
      await deleteAllFavouritePokemonsData();
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
