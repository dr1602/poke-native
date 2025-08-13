import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';

export const Favourites = () => {
  const pokemonData = usePokemonDetailStore(
    (state) => state.currentPokemonData
  );

  const addFavourite = () => {
    console.log('Añadido a favoritos', pokemonData?.id);
  };

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
