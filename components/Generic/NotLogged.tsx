import { useNavigation } from 'expo-router';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { loginImage } from '@/utils/constants/alerts';

export const NotLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={loginImage}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>
          Para ver a tus favoritos necesitas logearte
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title='Ir a login'
            // @ts-ignore
            onPress={() => navigation.navigate('account')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0', // Un fondo semitransparente para que el texto sea legible
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#000000c0',
    borderRadius: 5,
  },
});
