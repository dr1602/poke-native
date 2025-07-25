import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { StyleSheet, Text, View } from 'react-native';

export const Stats = () => {
  const { currentPokemonData } = usePokemonDetailStore();

  console.log(currentPokemonData);
  return (
    <View style={styles.content}>
      <Text style={styles.title}> Estadísticas Base </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 3,
  },
});
