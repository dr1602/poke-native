import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuthStore } from '@/store/authStore';
import { useFavouritesByIdStore } from '@/store/favouritesByIdStore';
import { ItemMenu } from './ItemMenu';

export const UserData = () => {
  const { clearAuthData } = useAuthStore();
  const authData = useAuthStore((state) => state.currentAuthData);
  const { currentFavouritesByIdData } = useFavouritesByIdStore();

  const qtyOfFavourites = currentFavouritesByIdData.length;

  const logout = () => {
    clearAuthData();
  };

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>¡Bienvenido, {authData?.firstName}!</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title='Nombre' text={`${authData?.firstName}`} />
        <ItemMenu title='Username' text={`${authData?.username}`} />
        <ItemMenu title='Email' text={`${authData?.email}`} />
        <ItemMenu
          title='Total Favoritos'
          text={`${qtyOfFavourites} pokemon${qtyOfFavourites !== 1 ? 's' : ''}`}
        />
      </View>

      <View style={styles.logoutButtonContainer}>
        <Button title={'Desconectarse'} onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 18,
    marginTop: 18,
  },
  titleBlock: {
    marginBottom: 27,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 21,
  },
  dataContent: {
    marginBottom: 18,
  },
  logoutButtonContainer: {
    paddingTop: 21,
  },
});
