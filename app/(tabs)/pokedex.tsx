import { getPokeApi } from '@/chore/api/pokeApi';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export const Pokedex = () => {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokeApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text> Pokedex</Text>
    </View>
  );
};

export default Pokedex;
