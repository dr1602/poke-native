import { StyleSheet, Text, View } from 'react-native';

const Account = () => {
  const auth = null;
  return (
    <View>
      {auth ? (
        <Text style={styles.text}> Panel del usuario</Text>
      ) : (
        <Text style={styles.text}> Formulario de Login</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});

export default Account;
