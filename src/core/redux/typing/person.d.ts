interface User {
  name: string;
  avatar: string | null;
  email: string;
  courses: any[];
}

declare module 'PersonTypes' {
  export interface PersonState {
    user: User;
    loading: boolean;
    error?: string;
  }
}
