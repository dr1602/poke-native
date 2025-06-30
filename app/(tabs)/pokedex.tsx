import { SafeAreaView } from 'react-native';

import { PokemonList } from '@/components/Pokemon/PokemonList';
import { useLoadPokemons } from '@/hooks/useLoadPokemons';

export const Pokedex = () => {
  const { pokemons, loadPokemons, nextUrl } = useLoadPokemons();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PokemonList
        pokemons={pokemons}
        onLoad={loadPokemons}
        isThereNext={nextUrl}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
