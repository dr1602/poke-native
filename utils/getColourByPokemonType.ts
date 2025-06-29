import { POKEMON_TYPE_COLORS } from '@/utils/constants/colourConstants';

type PokemonType = keyof typeof POKEMON_TYPE_COLORS;

export const getColourByPokemonType = (types: string): string => {
  const normalizedType = types.toLowerCase() as PokemonType;
  return POKEMON_TYPE_COLORS[normalizedType] ?? '#000000';
};
