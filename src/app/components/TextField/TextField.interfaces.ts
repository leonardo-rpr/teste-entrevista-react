export interface TextFieldInterface {
  label: string;
  value: string;
  placeholder: string;
  onChange: (event: any) => void;
  error?: string | null | boolean;
  touched?: boolean;
}

export interface TextFieldStylesInterface {
  error?: string | null | boolean;
}
