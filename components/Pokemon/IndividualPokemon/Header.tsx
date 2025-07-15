import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { capitalize } from '@/utils/capitalize';
import { getColourByPokemonType } from '@/utils/getColourByPokemonType';
import { PokemonFinalData } from '@/utils/types/PokeTypes';

interface PokemonDataProps {
  PokemonData: PokemonFinalData;
}

export const Header = ({ PokemonData }: PokemonDataProps) => {
  const PokemonColour: string = getColourByPokemonType(PokemonData.types);
  const bgStyles = { backgroundColor: PokemonColour, ...styles.Background };

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: PokemonData.image }} style={styles.image} />
        </View>
        <View style={styles.header}>
          <Text style={styles.name}>
            #{`${PokemonData.order}`.padStart(3, '0')}
            <strong> {capitalize(PokemonData.name)} </strong>
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
  },
});
