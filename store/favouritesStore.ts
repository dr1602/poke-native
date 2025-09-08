import { create } from 'zustand';

interface FavouritesDataState {
  currentFavouritesByIdData: number[];
  setFavouritesByIdData: (data: number[]) => void;
  clearFavouritesByIdData: () => void;
}

export const useFavouritesByIdStore = create<FavouritesDataState>((set) => ({
  currentFavouritesByIdData: [],
  setFavouritesByIdData: (data) => set({ currentFavouritesByIdData: data }),
  clearFavouritesByIdData: () => ({ currentFavouritesByIdData: [] }),
}));
