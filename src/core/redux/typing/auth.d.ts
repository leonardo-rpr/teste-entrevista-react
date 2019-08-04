declare module 'AuthTypes' {
  export type AuthState = {
    user: any
    loading: boolean
    error?: string
    headers: Record<string, any>
  }
}
