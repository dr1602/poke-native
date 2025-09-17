import { useCallback, useEffect, useState } from 'react';

import { getPokeApi, getPokemonDetailsByUrlApi } from '@/chore/api/pokeApi';
import { PokeApiResponseType, PokemonUrlType } from '@/utils/types/ApiTypes';
import { PokemonData, PokemonFinalData } from '@/utils/types/PokeTypes';

export const useLoadPokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonFinalData[]>([]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = useCallback(async () => {
    setLoading(true);
    try {
      const response: PokeApiResponseType = await getPokeApi(nextUrl);
      const pokemonsArray: PokemonFinalData[] = [];

      setNextUrl(response.next);

      for await (const pokemon of response.results as PokemonUrlType[]) {
        const pokemonDetails: PokemonData = await getPokemonDetailsByUrlApi(
          pokemon.url
        );

        const parts = pokemon.url.split('/');
        const numberId = parts[parts.length - 2];

        pokemonsArray.push({
          number: !!numberId ? numberId : '',
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          types: pokemonDetails.types.map((typeInfo) => typeInfo.type.name),
          order: pokemonDetails.order,
          image:
            pokemonDetails.sprites.other['home'].front_default || undefined,
        });
      }

      setPokemons((currentPokemons) => [...currentPokemons, ...pokemonsArray]);
    } catch (error) {
      console.error('Error loading pokemons:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, nextUrl]);

  return { pokemons, loadPokemons, nextUrl };
};
