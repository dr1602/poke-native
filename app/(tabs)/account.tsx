import { LoginForm } from '@/components/Auth/LoginForm';
import { UserData } from '@/components/Auth/UserData';
import { StyleSheet, View } from 'react-native';

const Account = () => {
  const auth = null;
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});

export default Account;
