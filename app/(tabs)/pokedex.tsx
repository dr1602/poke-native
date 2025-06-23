import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { getPokeApi, getPokemonDetailsByUrlApi } from '@/chore/api/pokeApi';

interface PokemonUrlType {
  url: string;
}

interface PokemonData {
  id: string;
  name: string;
  type: any;
  order?: string;
  sprites?: any;
}

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
          type: pokemonDetails.type[0].type.name,
          order: pokemonDetails.order,
          sprites: pokemonDetails.sprites.other['home'].front_default,
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
