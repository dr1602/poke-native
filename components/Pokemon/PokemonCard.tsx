import { Pressable, StyleSheet, Text, View } from 'react-native';

import { PokemonFinalData } from '@/utils/types/PokeTypes';

const PokemonCard: React.FC<PokemonFinalData> = ({ ...PokemonFinalData }) => {
  const goToPokemon = () => {
    console.log('Veamos al pokemon', PokemonFinalData.name);
  };
  return (
    <Pressable onPress={goToPokemon} style={styles.MainContainer}>
      <View style={styles.PokemonSecondaryContainer}>
        <View style={styles.Spacing}>
          <Text style={styles.PokemonText}> {PokemonFinalData.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    height: 130,
    width: 130,
  },
  PokemonSecondaryContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  Spacing: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  PokemonText: {
    color: 'black',
    textAlign: 'center',
  },
});

export { PokemonCard };
