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

export interface PokemonData {
  id: number;
  name: string;
  order: number;
  types: PokemonType[];
  sprites: string;
}
