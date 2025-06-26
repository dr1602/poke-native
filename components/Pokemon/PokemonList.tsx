import { FlatList, Text } from 'react-native';

import { PokemonFinalData } from '@/utils/types/PokeTypes';

interface PokemonProps {
  pokemons: PokemonFinalData[];
}

const PokemonList: React.FC<PokemonProps> = ({ pokemons }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export { PokemonList };
