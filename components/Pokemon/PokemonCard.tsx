import { StyleSheet } from 'react-native';

const PokemonCard = () => {
  return (
    <>
      <div style={styles.PokemonText}> This is the pokecard</div>
    </>
  );
};

const styles = StyleSheet.create({
  PokemonText: {
    color: 'white',
  },
});

export { PokemonCard };
