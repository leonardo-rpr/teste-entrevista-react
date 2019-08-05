import React from 'react';
import { Field, Label, Input } from './TextField.styles';

import { TextFieldInterface } from './TextField.interfaces';

const TextField: React.FC<TextFieldInterface> = ({
  label,
  value,
  placeholder,
  onChange,
  theme,
}) => (
  <Field>
    {label && <Label>{label}</Label>}
    <Input value={value} onChange={onChange} placeholder={placeholder} />
  </Field>
);

TextField.defaultProps = {
  label: '',
};

export default TextField;
