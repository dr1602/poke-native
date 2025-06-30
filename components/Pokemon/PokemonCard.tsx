import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { capitalize } from '@/utils/capitalize';
import { getColourByPokemonType } from '@/utils/getColourByPokemonType';
import { PokemonFinalData } from '@/utils/types/PokeTypes';

const PokemonCard: React.FC<PokemonFinalData> = ({ ...PokemonFinalData }) => {
  const [state, setState] = useState<string>('');

  const PokemonColour: string = getColourByPokemonType(PokemonFinalData.types);
  const bgStyles = { backgroundColor: PokemonColour, ...styles.Background };

  const goToPokemon = () => {
    setState(PokemonFinalData.name);
    Boolean(state);
  };
  return (
    <Pressable onPress={goToPokemon} style={styles.MainContainer}>
      <View style={styles.PokemonSecondaryContainer}>
        <View style={bgStyles}>
          {PokemonFinalData.image && (
            <View style={styles.ImageWrapper}>
              <Image
                source={{ uri: PokemonFinalData.image }}
                style={styles.Image}
              />
            </View>
          )}
          <Text style={styles.PokemonText}>
            #{`${PokemonFinalData.order}`.padStart(3, '0')} {''}
            <strong> {capitalize(PokemonFinalData.name)} </strong>
          </Text>
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
    margin: 3,
  },
  PokemonSecondaryContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  ImageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    marginTop: 81,
    width: 90,
    height: 90,
  },
  PokemonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 96,
    paddingBottom: 1,
  },
  Background: {
    flex: 1,
    borderRadius: 6,
    padding: 10,
    justifyContent: 'center',
  },
});

export { PokemonCard };
