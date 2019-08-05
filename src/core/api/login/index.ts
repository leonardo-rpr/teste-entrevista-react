import create from './create'
import { Login } from 'apiTypes'

const login = (getPublicResource: Function) => {
  return {
    create: (credentials: Login) => create(getPublicResource, credentials)
  }
}

export default login
