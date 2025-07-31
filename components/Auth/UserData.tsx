import { StyleSheet, Text, View } from 'react-native';

import { useAuthStore } from '@/store/authStore';

export const UserData = () => {
  const authData = useAuthStore((state) => state.currentAuthData);

  return (
    <View>
      {authData && (
        <Text style={styles.text}>¡Bienvenido, {authData.username}!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});
