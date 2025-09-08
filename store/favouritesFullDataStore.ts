import { PokemonFinalExtendedData } from '@/utils/types/PokeTypes';
import { create } from 'zustand';

interface FavouritesFullDataState {
  currentFavouritesFullData: PokemonFinalExtendedData[];
  setFavouritesFullData: (data: PokemonFinalExtendedData[]) => void;
  clearFavouritesFullData: () => void;
}

export const useFavouritesFullStore = create<FavouritesFullDataState>(
  (set) => ({
    currentFavouritesFullData: [],
    setFavouritesFullData: (data) => set({ currentFavouritesFullData: data }),
    clearFavouritesFullData: () => ({ currentFavouritesFullData: [] }),
  })
);
