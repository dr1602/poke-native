import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

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
    <View>
      <Text style={styles.PokemonName}> Estamos en el Pokemon: {name}</Text>
      <Text style={styles.PokemonId}> El ID del Pokemon: {id}</Text>
      <Text style={styles.PokemonId}> El Typo del Pokemon: {types}</Text>
      <Text style={styles.PokemonId}> El Orden del Pokemon: {order}</Text>
      <Text style={styles.PokemonId}> La imagen del Pokemon: {image}</Text>
    </View>
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
