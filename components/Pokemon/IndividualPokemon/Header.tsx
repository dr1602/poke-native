import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Favourites } from './Favourites';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ButtonContainer}>
      <AntDesign
        name='leftcircleo'
        size={24}
        color='#fff'
        style={{ marginLeft: 18, marginTop: 15, zIndex: 10 }}
        onPress={navigation.goBack}
      />
      <Favourites />
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    position: 'absolute',
    width: '100%',
  },
  PokemonName: {
    color: 'white',
  },
});
