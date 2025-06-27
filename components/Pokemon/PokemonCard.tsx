import { Pressable, StyleSheet, Text } from 'react-native';

import { PokemonFinalData } from '@/utils/types/PokeTypes';

const PokemonCard: React.FC<PokemonFinalData> = ({ ...PokemonFinalData }) => {
  const goToPokemon = () => {
    console.log('Veamos al pokemon', PokemonFinalData.name);
  };
  return (
    <Pressable onPress={goToPokemon}>
      <Text style={styles.PokemonText}> {PokemonFinalData.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  PokemonText: {
    color: 'white',
  },
});

export { PokemonCard };
