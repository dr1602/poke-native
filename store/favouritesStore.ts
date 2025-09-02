import { create } from 'zustand';

interface FavouritesDataState {
  currentFavouritesData: number[];
  setFavouritesData: (data: number[]) => void;
  clearFavouritesData: () => void;
}

export const useFavouritesStore = create<FavouritesDataState>((set) => ({
  currentFavouritesData: [],
  setFavouritesData: (data) => set({ currentFavouritesData: data }),
  clearFavouritesData: () => ({ currentFavouritesData: [] }),
}));
