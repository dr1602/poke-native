import { StyleSheet, Text, View } from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { capitalize } from '@/utils/capitalize';

export const Stats = () => {
  const { currentPokemonData } = usePokemonDetailStore();

  return (
    <View style={styles.content}>
      {currentPokemonData?.stats?.map((item) => {
        return (
          <View key={item.stat.name} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.text}> {capitalize(item.stat.name)} </Text>
            </View>
            <Text style={styles.text}>BARRA</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 18,
    marginTop: 9,
    marginBottom: 9,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  blockTitle: {
    width: '30%',
  },
  text: {
    color: '#fff',
  },
});
