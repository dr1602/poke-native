import { StyleSheet, Text, View } from 'react-native';
import { LoginForm } from '@/components/Auth/LoginForm';

const Account = () => {
  const auth = null;
  return (
    <View>
      {auth ? (
        <Text style={styles.text}> Panel del usuario</Text>
      ) : (
        <LoginForm/>
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
