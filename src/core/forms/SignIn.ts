import * as Yup from 'yup';
import { TextField } from 'components';

const SignIn = [
  {
    label: 'E-mail',
    name: 'email',
    id: 'email',
    validation: Yup.string()
      .email('E-mail inválido')
      .required('Obrigatório'),
    component: TextField,
  },
  {
    label: 'Senha',
    type: 'password',
    name: 'password',
    id: 'password',
    validation: Yup.string().required('Obrigatório'),
    component: TextField,
  },
];

export default SignIn;
