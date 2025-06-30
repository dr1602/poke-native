import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { PokemonListDataAndActions } from '@/utils/types/PokeTypes';
import { PokemonCard } from './PokemonCard';

const PokemonList: React.FC<PokemonListDataAndActions> = ({
  pokemons,
  onLoad,
}) => {
  const LoadMorePokemons = () => {
    onLoad();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard {...item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      onEndReached={LoadMorePokemons}
      onEndReachedThreshold={0.15}
      ListFooterComponent={
        <ActivityIndicator
          size='small'
          style={styles.Spinner}
          color={'#DF0026'}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
    zIndex: 3,
    justifyContent: 'center',
  },
  Spinner: {
    marginTop: 18,
    marginBottom: 60,
  },
});

export { PokemonList };
