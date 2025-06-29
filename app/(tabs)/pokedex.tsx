import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { getPokeApi, getPokemonDetailsByUrlApi } from '@/chore/api/pokeApi';
import { PokemonList } from '@/components/Pokemon/PokemonList';
import {
  PokemonData,
  PokemonFinalData,
  PokemonUrlType,
} from '@/utils/types/PokeTypes';

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState<PokemonFinalData[]>([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokeApi();
      const pokemonsArray: PokemonFinalData[] = [];

      for await (const pokemon of response.results as PokemonUrlType[]) {
        const pokemonDetails: PokemonData = await getPokemonDetailsByUrlApi(
          pokemon.url
        );

        console.log(pokemon.url);
        console.log(pokemonDetails);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          types: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image:
            pokemonDetails.sprites.other['home'].front_default || undefined,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PokemonList pokemons={pokemons} onLoad={loadPokemons} />
    </SafeAreaView>
  );
};

export default Pokedex;
