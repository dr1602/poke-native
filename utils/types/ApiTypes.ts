export interface PokeApiResponseType {
  count: number;
  next: string;
  previous: null | string;
  results: any;
}

export interface PokemonUrlType {
  url: string;
  name?: string;
}
