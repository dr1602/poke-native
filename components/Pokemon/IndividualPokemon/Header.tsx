import { View } from 'react-native';

import { getColourByPokemonType } from '@/utils/getColourByPokemonType';
import { PokemonFinalData } from '@/utils/types/PokeTypes';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PokemonDataProps {
  PokemonData: PokemonFinalData;
}

export const Header = ({ PokemonData }: PokemonDataProps) => {
  //   const pokemonData: PokemonFinalData | undefined = PokemonData;
  const color = getColourByPokemonType(PokemonData.types);

  return (
    <View>
      <SafeAreaView></SafeAreaView>
    </View>
  );
};
