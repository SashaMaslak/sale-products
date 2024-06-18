import { productsApi } from "constants/api"

export const fetchApiProducts = async endpoint => {
  return await productsApi.get(`${endpoint}`)
}
