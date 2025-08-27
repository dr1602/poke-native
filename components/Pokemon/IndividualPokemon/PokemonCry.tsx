import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export const PokemonCry = () => {
  return (
    <View style={styles.soundButtonContainer}>
      <AntDesign
        name='sound'
        size={24}
        color='#fff'
        style={{ marginLeft: 18, marginTop: 15, zIndex: 10 }}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  soundButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -39,
  },
});
