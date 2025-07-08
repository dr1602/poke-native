import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Pokemon = () => {
  const params = useLocalSearchParams();
  const pokeId = String(params.id);
  const pokeName = params.name;
  return (
    <View>
      <Text style={styles.PokemonName}> Estamos en el Pokemon: {pokeName}</Text>
      <Text style={styles.PokemonId}> El ID del Pokemon: {pokeId}</Text>
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
});

export default Pokemon;
