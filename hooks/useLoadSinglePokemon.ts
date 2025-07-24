import { useCallback, useEffect, useState } from 'react';

import { getPokemonDetailsById } from '@/chore/api/pokeApi';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import {
  PokemonExtendedData,
  PokemonFinalExtendedData,
} from '@/utils/types/PokeTypes';

export const useLoadSinglePokemon = (id: string) => {
  const { currentPokemonData, setPokemonData, clearPokemonData } =
    usePokemonDetailStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadSinglePokemon = useCallback(
    async (pokemonId: string) => {
      if (!pokemonId) {
        clearPokemonData();
        setLoading(false);
        return;
      }

      if (currentPokemonData?.id === Number(pokemonId) && !loading) {
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response: PokemonExtendedData = await getPokemonDetailsById(
          pokemonId
        );
        let pokemonsArray: PokemonFinalExtendedData = {
          id: response.id,
          name: response.name,
          types: response.types.map((typeInfo) => typeInfo.type.name),
          order: response.order,
          image: response.sprites.other['home'].front_default || undefined,
          height: response.height,
          weight: response.weight,
          cries: response.cries?.latest,
        };

        setPokemonData(pokemonsArray);
      } catch (error) {
        console.error('Error loading pokemons:', error);
        setError('Error al cargar la info del Pokémon');
        clearPokemonData();
      } finally {
        setLoading(false);
      }
    },
    [currentPokemonData, loading, setPokemonData, clearPokemonData, setError]
  );

  useEffect(() => {
    loadSinglePokemon(id);
  }, [id, loadSinglePokemon, clearPokemonData]);

  return { error, loading, loadSinglePokemon };
};
