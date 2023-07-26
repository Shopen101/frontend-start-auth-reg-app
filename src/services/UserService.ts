import $api from '../http'
import { AxiosResponse } from 'axios'
import { IUser } from '../models/IUser'

// example query
export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users')
  }
}
