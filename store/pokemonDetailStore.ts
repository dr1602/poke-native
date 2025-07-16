import { PokemonFinalExtendedData } from '@/utils/types/PokeTypes';
import { create } from 'zustand';

interface PokemonDetailState {
  currentPokemonData: PokemonFinalExtendedData | null;
  setPokemonData: (data: PokemonFinalExtendedData) => void;
  clearPokemonData: () => void;
}

export const usePokemonDetailStore = create<PokemonDetailState>((set) => ({
  currentPokemonData: null,
  setPokemonData: (data) => set({ currentPokemonData: data }),
  clearPokemonData: () => set({ currentPokemonData: null }),
}));
