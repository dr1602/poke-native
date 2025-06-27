import { FlatList, StyleSheet } from 'react-native';

import { PokemonFinalData } from '@/utils/types/PokeTypes';
import { PokemonCard } from './PokemonCard';

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
      renderItem={({ item }) => <PokemonCard {...item} />}
      contentContainerStyle={styles.FlatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
    zIndex: 3,
    justifyContent: 'center',
  },
});

export { PokemonList };
