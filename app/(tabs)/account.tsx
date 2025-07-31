import { LoginForm } from '@/components/Auth/LoginForm';
import { UserData } from '@/components/Auth/UserData';
import { View } from 'react-native';

import { useAuthStore } from '@/store/authStore';

const Account = () => {
  const authData = useAuthStore((state) => state.currentAuthData);

  return <View>{authData ? <UserData /> : <LoginForm />}</View>;
};

export default Account;
