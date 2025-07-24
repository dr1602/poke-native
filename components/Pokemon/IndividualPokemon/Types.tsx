import { StyleSheet, Text, View } from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { capitalize } from '@/utils/capitalize';
import { getColourByPokemonType } from '@/utils/getColourByPokemonType';

export const Types = () => {
  const { currentPokemonData } = usePokemonDetailStore();

  return (
    <>
      <View style={styles.content}>
        {currentPokemonData?.types &&
          currentPokemonData?.types.map((item) => {
            return (
              <View
                key={item}
                style={{
                  ...styles.pill,
                  backgroundColor: getColourByPokemonType(item),
                }}
              >
                <Text style={styles.text}>{capitalize(item)}</Text>
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
  },
  text: {
    color: '#fff',
  },
});
