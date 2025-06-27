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
          <View style={styles.Background}>
            <Text style={styles.PokemonText}> {PokemonFinalData.name}</Text>
          </View>
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
    padding: 5,
    justifyContent: 'center',
  },
  PokemonText: {
    color: 'black',
    textAlign: 'center',
  },
  Background: {
    backgroundColor: 'gray',
  },
});

export { PokemonCard };
