import { create } from 'zustand';

interface FavouritesByIdDataState {
  currentFavouritesByIdData: number[];
  setFavouritesByIdData: (data: number[]) => void;
  clearFavouritesByIdData: () => void;
}

export const useFavouritesByIdStore = create<FavouritesByIdDataState>(
  (set) => ({
    currentFavouritesByIdData: [],
    setFavouritesByIdData: (data) => set({ currentFavouritesByIdData: data }),
    clearFavouritesByIdData: () => ({ currentFavouritesByIdData: [] }),
  })
);
