import { useSearchParams } from 'expo-router/build/hooks';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/Pokemon/IndividualPokemon/Header';
import { Stats } from '@/components/Pokemon/IndividualPokemon/Stats';
import { Types } from '@/components/Pokemon/IndividualPokemon/Types';
import { useLoadSinglePokemon } from '@/hooks/useLoadSinglePokemon';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';

const Pokemon = () => {
  const params = useSearchParams();
  const idValue = params.get('id');
  const { loading, error } = useLoadSinglePokemon(idValue as string);
  const pokemonData = usePokemonDetailStore(
    (state) => state.currentPokemonData
  );

  if (loading) {
    return (
      <View>
        <Text style={styles.loadingText}>Cargando Pokémon...</Text>
      </View>
    );
  }

  if (error || !pokemonData) {
    return (
      <View>
        <Text style={styles.errorText}>
          {error || 'No se pudo cargar la información del Pokémon.'}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Header />
      <Types />
      <Stats />
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
  loadingText: {
    paddingHorizontal: 18,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    paddingHorizontal: 18,
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Pokemon;
