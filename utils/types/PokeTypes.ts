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

interface PokemonCries {
  latest: string;
  legacy: string;
}

interface StatInfo {
  name: string;
  url: string;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: StatInfo;
}

export interface PokemonExtendedData extends PokemonData {
  height: number;
  weight: number;
  cries?: PokemonCries;
  stats?: PokemonStat[];
}

export interface PokemonFinalData {
  number?: string;
  id: number;
  name: string;
  order: number;
  types: string[];
  image: string | undefined;
}

export interface PokemonFinalExtendedData extends PokemonFinalData {
  height: number;
  weight: number;
  cries?: string;
  stats?: PokemonStat[];
}

interface PokemonProps {
  pokemons: PokemonFinalData[];
}

export interface PokemonCardActions {
  onLoad: VoidFunction;
  isThereNext: string;
}

export type PokemonCardDataAndActions = PokemonFinalData & PokemonCardActions;

export type PokemonListDataAndActions = PokemonProps & PokemonCardActions;
