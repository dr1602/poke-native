import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { capitalize } from '@/utils/capitalize';
import { getColourByPokemonType } from '@/utils/getColourByPokemonType';

export const Background = () => {
  const { currentPokemonData } = usePokemonDetailStore();

  const PokemonColour: string = getColourByPokemonType(
    currentPokemonData?.types[0] || ''
  );
  const bgStyles = { backgroundColor: PokemonColour, ...styles.Background };

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: currentPokemonData?.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.name}>
            #{`${currentPokemonData?.order}`.padStart(3, '0')}
            <strong> {capitalize(currentPokemonData?.name || '')} </strong>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 51,
  },
  name: {
    color: '#fff',
    fontSize: 21,
  },
  Background: {
    width: '100%',
    height: 354,
    justifyContent: 'center',
    position: 'absolute',
    borderBottomEndRadius: 690,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
    zIndex: -3,
  },
});
