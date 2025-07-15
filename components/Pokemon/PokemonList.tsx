import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
} from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { PokemonListDataAndActions } from '@/utils/types/PokeTypes';
import { useEffect } from 'react';
import { PokemonCard } from './PokemonCard';

const PokemonList: React.FC<PokemonListDataAndActions> = ({
  pokemons,
  onLoad,
  isThereNext,
}) => {
  const { clearPokemonData } = usePokemonDetailStore();

  const LoadMorePokemons = () => {
    onLoad();
  };

  useEffect(() => {
    clearPokemonData();

    return () => {
      clearPokemonData();
    };
  }, [clearPokemonData]);

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard {...item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      onEndReached={!!isThereNext ? LoadMorePokemons : null}
      onEndReachedThreshold={0.15}
      ListFooterComponent={
        !!isThereNext ? (
          <ActivityIndicator
            size='small'
            style={styles.Spinner}
            color={'#DF0026'}
          />
        ) : (
          <></>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
    zIndex: 3,
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  Spinner: {
    marginTop: 18,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});

export { PokemonList };
