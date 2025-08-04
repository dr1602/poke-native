import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useLoginForm } from '@/hooks/Auth/useLoginForm';
import { useAuthStore } from '@/store/authStore';
import {
  initialValues,
  LoginFormInputs,
  loginSchema,
} from '@/utils/Schemas/loginSchema';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialValues,
  });

  const { error, onSubmit } = useLoginForm();

  const authData = useAuthStore((state) => state.currentAuthData);

  return (
    <View>
      <Text style={styles.title}> Iniciar sesión </Text>
      <Controller
        control={control}
        name='username'
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            placeholder='Usuario'
            style={styles.input}
            autoCapitalize='none'
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />

      {errors.username && (
        <Text style={styles.error}>{errors.username.message}</Text>
      )}

      <Controller
        control={control}
        name='password'
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            placeholder='Contraseña'
            style={styles.input}
            autoCapitalize='none'
            secureTextEntry={true}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />

      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      {!!error && <Text style={styles.error}>{error}</Text>}

      <View style={styles.buttonContainer}>
        <Button title='Ingresar' onPress={handleSubmit(onSubmit)} />
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
  error: {
    textAlign: 'center',
    color: '#f00',
    marginVertical: 6,
  },
});
