import { StyleSheet, Text, View } from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';

export const Types = () => {
  const { currentPokemonData } = usePokemonDetailStore();
  return (
    <>
      <View>
        <Text style={styles.text}> {currentPokemonData?.types} </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});
