import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export const LoginForm = () => {
  return (
    <View>
      <Text style={styles.title}> Iniciar sesión </Text>
      <TextInput
        placeholder='Usuario'
        style={styles.input}
        autoCapitalize='none'
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button title='Ingresar' onPress={() => console.log('Ingresando...')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 47,
    marginBottom: 15,
  },
  input: {
    color: '#fff',
    height: 39,
    margin: 12,
    borderWidth: 1,
    padding: 9,
    borderRadius: 6,
    borderColor: '#fff',
  },
  buttonContainer: {
    margin: 12,
    borderRadius: 9,
    objectFit: 'fill',
  },
});
