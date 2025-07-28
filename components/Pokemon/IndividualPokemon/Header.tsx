import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { StyleSheet, View } from 'react-native';

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
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    position: 'absolute',
  },
  PokemonName: {
    color: 'white',
  },
});
