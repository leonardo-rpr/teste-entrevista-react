export interface TextFieldInterface {
  label: string;
  value: string;
  placeholder: string;
  onChange: (event: any) => void;
  error?: string | null;
  theme?: any;
}

export interface TextFieldStylesInterface {
  theme?: any;
}
