import { StyleSheet, Text, View } from 'react-native';

import { usePokemonDetailStore } from '@/store/pokemonDetailStore';

export const Types = () => {
  const { currentPokemonData } = usePokemonDetailStore();

  console.log(currentPokemonData);
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.text}>
          {/* {
          Array(currentPokemonData?.types).map((item) => {
            <View>
              
            </View>
          })
          }  */}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 21,
  },
  text: {
    color: '#fff',
  },
});
