import React from 'react';
import { Field, Label, Input, Error } from './TextField.styles';

import { TextFieldInterface } from './TextField.interfaces';

const TextField: React.FC<TextFieldInterface> = ({
  label,
  value,
  placeholder,
  onChange,
  error,
  touched,
  ...props
}) => (
  <Field>
    {label && <Label>{label}</Label>}
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={!!(touched && error)}
      {...props}
    />
    {!!(touched && error) && <Error>{error}</Error>}
  </Field>
);

TextField.defaultProps = {
  label: '',
};

export default TextField;
