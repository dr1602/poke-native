export interface PokemonUrlType {
  url: string;
  name?: string;
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonSprites {
  front_default?: string | null;
  other: {
    ['home']: {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
}

export interface PokemonData {
  id: number;
  name: string;
  order: number;
  types: PokemonType[];
  sprites: PokemonSprites;
}

export interface PokemonFinalData {
  id: number;
  name: string;
  order: number;
  types: string;
  image: string | undefined;
}

interface PokemonProps {
  pokemons: PokemonFinalData[];
}

export interface PokemonCardActions {
  onLoad: VoidFunction;
}

export type PokemonCardDataAndActions = PokemonFinalData & PokemonCardActions;

export type PokemonListDataAndActions = PokemonProps & PokemonCardActions;
