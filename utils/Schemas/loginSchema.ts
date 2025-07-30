import { z } from 'zod'

export const loginSchema = z.object({
    username: z.string().nonempty('Usuario obligatorio'),
    password: z.string().nonempty('Contraseña obligatoria')
})

export const initialValues: LoginFormInputs = {
  username: '',
  password: '',
};

export type LoginFormInputs = z.infer<typeof loginSchema>