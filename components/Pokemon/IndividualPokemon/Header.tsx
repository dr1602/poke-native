import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { useAuthStore } from '@/store/authStore';
import { Favourites } from './Favourites';

export const Header = () => {
  const navigation = useNavigation();

  const authData = useAuthStore((state) => state.currentAuthData);

  return (
    <View style={styles.ButtonContainer}>
      <AntDesign
        name='leftcircleo'
        size={24}
        color='#fff'
        style={{ marginLeft: 18, marginTop: 15, zIndex: 10 }}
        onPress={navigation.goBack}
      />
      {authData && <Favourites />}
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PokemonName: {
    color: 'white',
  },
});
