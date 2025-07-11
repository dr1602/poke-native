import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

import { getColourByPokemonType } from '@/utils/getColourByPokemonType';
import { PokemonFinalData } from '@/utils/types/PokeTypes';

interface PokemonDataProps {
  PokemonData: PokemonFinalData;
}

export const Header = ({ PokemonData }: PokemonDataProps) => {
  //   const pokemonData: PokemonFinalData | undefined = PokemonData;
  const color = getColourByPokemonType(PokemonData.types);

  return (
    <View>
      <SafeAreaView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: PokemonData.image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    top: 30,
    paddingLeft: 69,
    paddingRight: 69,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
