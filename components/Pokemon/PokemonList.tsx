import { FlatList, StyleSheet, Text } from 'react-native';

import { PokemonFinalData } from '@/utils/types/PokeTypes';

interface PokemonProps {
  pokemons: PokemonFinalData[];
}

const PokemonList: React.FC<PokemonProps> = ({ pokemons }) => {
  console.log('pokemons from ', pokemons);
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.FlatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
    zIndex: 3,
  },
});

export { PokemonList };
