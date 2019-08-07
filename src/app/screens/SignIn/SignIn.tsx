import React from 'react';

import formikEnhancer from 'formik-enhancer';

import { useSelector } from 'react-redux';
import dispatchAction, { AuthActions } from '../../../core/redux/actions';

import { Paper, Button } from '../../components';
import { SignInForm } from '../../../core/forms';
import { Container } from './SignIn.styles';

const SignIn: React.FC<{}> = () => {
  const loading = useSelector((state: any) => state.auth.loading);

  const formConfig = {
    onSubmit: (values: any) => dispatchAction(AuthActions.login.request, values),
    children: ({ handleSubmit }: any) => (
      <Button onClick={handleSubmit} loading={loading}>
        Entrar
      </Button>
    ),
  };

  return (
    <Container>
      <Paper width="40%">{formikEnhancer({ config: formConfig, schema: SignInForm })}</Paper>
    </Container>
  );
};

export default SignIn;
