import { usersApi } from "constants/api"

export const fetchApiUser = async (endpoint, user) => {
  return await usersApi.post(`${endpoint}`, user)
}

export const setToken = token => {
  usersApi.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const deleteToken = () => {
  usersApi.defaults.headers.common["Authorization"] = ""
}
