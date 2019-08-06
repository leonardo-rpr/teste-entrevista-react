declare module 'AuthTypes' {
  export interface AuthState {
    token: string;
    loading: boolean;
    error?: string;
  }
}
