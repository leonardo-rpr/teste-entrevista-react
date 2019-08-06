import React from 'react';

import formikEnhancer from 'formik-enhancer';
import { SignInForm } from 'forms';

import { Paper, Button } from 'components';
import { Container } from './SignIn.styles';

const SignIn: React.FC<{}> = () => {
  const formConfig = {
    onSubmit: (values: any) => console.log(values), // dispatchAction(AuthActions.login.request, values),
    children: (props: any) => <Button onClick={props.handleSubmit}>Entrar</Button>,
  };

  return (
    <Container>
      <Paper>{formikEnhancer({ config: formConfig, schema: SignInForm })}</Paper>
    </Container>
  );
};

export default SignIn;
