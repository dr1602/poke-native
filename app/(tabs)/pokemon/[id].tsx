import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Header } from '@/components/Pokemon/IndividualPokemon/Header';
import { Stats } from '@/components/Pokemon/IndividualPokemon/Stats';
import { Types } from '@/components/Pokemon/IndividualPokemon/Types';
import { useLoadSinglePokemon } from '@/hooks/useLoadSinglePokemon';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { useEffect } from 'react';

const Pokemon = () => {
  const params = useSearchParams();
  const navigation = useNavigation();
  const idValue = params.get('id');
  const { loading, error } = useLoadSinglePokemon(idValue as string);
  const pokemonData = usePokemonDetailStore(
    (state) => state.currentPokemonData
  );

  useEffect(() => {
    console.log('✅ El componente Pokemon ha sido montado.');
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => {
        console.log('✨ Renderizando AntDesign icon en headerLeft.');
      },
    });
  }, [navigation, params]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator
          size='small'
          style={styles.Spinner}
          color={'#DF0026'}
        />
      </View>
    );
  }

  if (error || !pokemonData) {
    return (
      <View>
        <Text style={styles.errorText}>
          {'No se pudo cargar la información del Pokémon.'}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.ButtonContainer}>
        <AntDesign
          name='leftcircleo'
          size={24}
          color='#fff'
          style={{ marginLeft: 18, marginTop: 15, zIndex: 10 }}
          onPress={() => console.log('Ir atrás')}
        />
      </View>
      <Header />
      <Types />
      <Stats />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    position: 'absolute',
  },
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
  Spinner: {
    marginTop: 30,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});

export default Pokemon;
