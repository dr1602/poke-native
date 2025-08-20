import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  addFavouritePokemon,
  getFavouritePokemons,
} from '@/services/favoritesService';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';

export const Favourites = () => {
  const pokemonData = usePokemonDetailStore(
    (state) => state.currentPokemonData
  );

  const addFavourite = async () => {
    await addFavouritePokemon(pokemonData?.id);
  };

  const fetchFavourites = async () => {
    const favourites = await getFavouritePokemons();
    console.log(favourites);
  };

  useEffect(() => {
    fetchFavourites;
  }, []);

  return (
    <View style={styles.iconContainer}>
      <FontAwesome
        name='heart-o'
        size={24}
        color='black'
        onPress={addFavourite}
        style={styles.iconStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  iconStyles: { color: 'white' },
});
