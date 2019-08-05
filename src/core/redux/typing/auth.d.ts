declare module 'AuthTypes' {
  export type AuthState = {
    token: string;
    loading: boolean;
    error?: string;
  };
}
