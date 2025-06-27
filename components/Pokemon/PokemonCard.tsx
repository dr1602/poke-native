import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { capitalize } from '@/utils/capitalize';
import { PokemonFinalData } from '@/utils/types/PokeTypes';

const PokemonCard: React.FC<PokemonFinalData> = ({ ...PokemonFinalData }) => {
  const [state, setState] = useState<string>('');
  const goToPokemon = () => {
    setState(PokemonFinalData.name);
    Boolean(state)
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
            <Text style={styles.PokemonText}>
              #{`${PokemonFinalData.order}`.padStart(3, '0')} {''}
              {capitalize(PokemonFinalData.name)}
            </Text>
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
    margin: 3,
  },
  PokemonSecondaryContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  Spacing: {
    padding: 5,
    justifyContent: 'center',
  },
  Image: {
    position: 'absolute',
    top: 15,
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
    borderRadius: 6,
  },
});

export { PokemonCard };
