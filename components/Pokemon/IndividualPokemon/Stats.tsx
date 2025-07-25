import { StyleSheet, Text, View } from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { barColours } from '@/utils/barColours';
import { capitalize } from '@/utils/capitalize';

export const Stats = () => {
  const { currentPokemonData } = usePokemonDetailStore();

  return (
    <View style={styles.content}>
      {currentPokemonData?.stats?.map((item) => {
        return (
          <View key={item.stat.name} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.number}>{item.base_stat}</Text>
              <View style={styles.backgroundBar}>
                <View style={[styles.bar, barColours(item.base_stat)]} />
              </View>
            </View>
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
  statName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    color: '#fff',
    width: '12%',
    fontSize: 12,
  },
  backgroundBar: {
    backgroundColor: '#c0c0c0',
    width: '88%',
    height: 6,
    borderRadius: 18,
    overflow: 'hidden',
  },
  bar: {
    height: 6,
    borderRadius: 18,
  },
});
