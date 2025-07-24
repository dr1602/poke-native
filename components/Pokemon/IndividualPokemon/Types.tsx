import { StyleSheet, Text, View } from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';

export const Types = () => {
  const { currentPokemonData } = usePokemonDetailStore();

  return (
    <>
      <View style={styles.content}>
        {currentPokemonData?.types &&
          currentPokemonData?.types.map((item) => {
            return (
              <View key={item} style={styles.pill}>
                <Text style={styles.text}>{item}</Text>
              </View>
            );
          })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 21,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 18,
    marginHorizontal: 6,
    backgroundColor: 'red',
  },
  text: {
    color: '#fff',
  },
});
