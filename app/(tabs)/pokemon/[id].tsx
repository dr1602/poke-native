import { ScrollView } from 'react-native';

import { Header } from '@/components/Pokemon/IndividualPokemon/Header';
import { usePokemonDetailStore } from '@/store/pokemonDetailStore';
import { PokemonFinalData } from '@/utils/types/PokeTypes';

const Pokemon = () => {
  const { currentPokemonData } = usePokemonDetailStore();

  return (
    <ScrollView>
      <Header PokemonData={currentPokemonData as PokemonFinalData} />
    </ScrollView>
  );
};

export default Pokemon;
