import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers'

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema()),
    validationOnChange: true,
    onSubmit: (formValue: any) => {
      console.log(formValue);
    },
  });

  return (
    <View>
      <Text style={styles.title}> Iniciar sesión </Text>
      <TextInput
        placeholder='Usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <View style={styles.buttonContainer}>
        <Button title='Ingresar' onPress={formik.handleSubmit} />
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  );
};

const initialValues = () => {
  return {
    username: '',
    password: '',
  };
};

const validationSchema = () => {
  return {
    username: Yup.string().required('Usario obligatorio'),
    password: Yup.string().required('Contraseña obligatoria'),
  };
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
    marginTop: 18,
  },
});
