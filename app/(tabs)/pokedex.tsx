import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { getPokeApi, getPokemonDetailsByUrlApi } from '@/chore/api/pokeApi';
import { PokemonData, PokemonUrlType } from '@/utils/types/PokeTypes';

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  console.log('Pokemons --->', pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokeApi();
      const pokemonsArray: PokemonData[] = [];

      for await (const pokemon of response.results as PokemonUrlType[]) {
        const pokemonDetails: PokemonData = await getPokemonDetailsByUrlApi(
          pokemon.url
        );

        console.log(pokemon.url);
        console.log(pokemonDetails);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          types: pokemonDetails.types,
          order: pokemonDetails.order,
          sprites: {
            front_default: pokemonDetails.sprites.front_default,
            other: {
              home: {
                front_default:
                  pokemonDetails.sprites.other?.home?.front_default ?? null,
                front_shiny:
                  pokemonDetails.sprites.other?.home?.front_shiny ?? null,
              },
            },
          },
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text> Pokedex</Text>
    </View>
  );
};

export default Pokedex;
