import { StyleSheet } from 'react-native';

import { PokemonFinalData } from '@/utils/types/PokeTypes';
import React from 'react';

const PokemonCard: React.FC<PokemonFinalData> = ({ ...PokemonFinalData }) => {
  return (
    <>
      <div style={styles.PokemonText}> {PokemonFinalData.name} </div>
    </>
  );
};

const styles = StyleSheet.create({
  PokemonText: {
    color: 'white',
  },
});

export { PokemonCard };
