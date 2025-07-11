import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Pokemon/IndividualPokemon/Header';
import { PokemonFinalData } from '@/utils/types/PokeTypes';

const Pokemon = () => {
  const params = useLocalSearchParams();

  let pokemonData: PokemonFinalData | undefined;
  const pokemonDetailsJson = params.PokemonFinalData;

  if (typeof pokemonDetailsJson === 'string') {
    try {
      pokemonData = JSON.parse(pokemonDetailsJson) as PokemonFinalData;
    } catch (e) {
      console.error('Error al parsear los detalles del Pokemon:', e);
    }
  }

  if (!pokemonData) {
    return (
      <View>
        <Text style={styles.errorText}>
          Cargando o no se encontró la información del Pokémon.
        </Text>
      </View>
    );
  }

  const { id, name, types, order, image } = pokemonData;

  return (
    <ScrollView>
      <Header 
        PokemonData={pokemonData}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  PokemonName: {
    color: 'white',
  },
  PokemonId: {
    color: 'white',
  },
  errorText: {
    paddingHorizontal: 18,
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Pokemon;
