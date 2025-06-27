import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

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
            {PokemonFinalData.image && (
              <Image
                source={{ uri: PokemonFinalData.image }}
                style={styles.Image}
              />
            )}

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
  Image: {
    position: 'absolute',
    bottom: 33,
    right: 39,
    width: 90,
    height: 90,
  },
  PokemonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 1,
    paddingBottom: 1,
  },
  Background: {
    backgroundColor: 'gray',
  },
});

export { PokemonCard };
