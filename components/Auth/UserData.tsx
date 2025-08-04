import { StyleSheet, Text, View } from 'react-native';

import { useAuthStore } from '@/store/authStore';
import { ItemMenu } from './ItemMenu';

export const UserData = () => {
  const authData = useAuthStore((state) => state.currentAuthData);

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>¡Bienvenido, {authData?.firstName}!</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title='Nombre' text={`${authData?.firstName}`} />
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
});
