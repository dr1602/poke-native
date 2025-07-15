import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Pokemon/IndividualPokemon/Header';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { PokemonFinalData } from '@/utils/types/PokeTypes';

const Pokemon = () => {
  const { currentPokemonData } = usePokemonDetailStore();
  let pokemonData: PokemonFinalData | undefined;

  if (!!currentPokemonData) {
    try {
      pokemonData = currentPokemonData;
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

  return (
    <ScrollView>
      <Header PokemonData={pokemonData} />
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
