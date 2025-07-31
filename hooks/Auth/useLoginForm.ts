import { useEffect, useState } from 'react';

import { useAuthStore } from '@/store/authStore';
import { user, userDetails } from '@/utils/db/userDB';
import { LoginFormInputs } from '@/utils/Schemas/loginSchema';

export const useLoginForm = () => {
  const { setAuthData, clearAuthData } = useAuthStore();
  const [error, setError] = useState<any>();

  const onSubmit = (data: LoginFormInputs) => {
    setError('');
    const { username, password } = data;

    if (username !== user.username || password !== user.password) {
      setError('El usuario o la contraseña no son correctos.');
      clearAuthData();
    } else {
      setAuthData(userDetails);
    }
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | null = null;

    if (error) {
      timerId = setTimeout(() => {
        setError('');
      }, 3000);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [error, setError]);

  return { error, onSubmit };
};
