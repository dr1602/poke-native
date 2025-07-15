import { PokemonFinalData } from '@/utils/types/PokeTypes';
import { create } from 'zustand';

interface PokemonDetailState {
  currentPokemonData: PokemonFinalData | null;
  setPokemonData: (data: PokemonFinalData) => void;
  clearPokemonData: () => void;
}

export const usePokemonDetailStore = create<PokemonDetailState>((set) => ({
  currentPokemonData: null,
  setPokemonData: (data) => set({ currentPokemonData: data }),
  clearPokemonData: () => set({ currentPokemonData: null }),
}));
