import { LoginForm } from '@/components/Auth/LoginForm';
import { UserData } from '@/components/Auth/UserData';
import { View } from 'react-native';

const Account = () => {
  const auth = null;
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

export default Account;
