import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { usePokemonCry } from '@/hooks/usePokemonCry';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';

export const PokemonCry = () => {
  const { currentPokemonData } = usePokemonDetailStore();
  const { playPokeCry } = usePokemonCry(currentPokemonData?.cries);

  return (
    <View style={styles.soundButtonContainer}>
      <AntDesign
        name='sound'
        size={21}
        color='#fff'
        style={{ marginLeft: 18, marginTop: 15, zIndex: 10 }}
        // onPress={() => {}}
        onPress={playPokeCry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  soundButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -33,
  },
});
