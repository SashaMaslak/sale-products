import { productsApi } from "constants/api"

export const fetchApiProducts = async endpoint => {
  return await productsApi.get(`${endpoint}`)
}

export const fetchOneProduct = async id => {
  return await productsApi.get(`${id}`)
}

export const fetchAddProduct = async newProduct => {
  return await productsApi.post("", newProduct)
}

export const fetchEditProduct = async (id, editedProduct) => {
  return await productsApi.put(`${id}`, editedProduct)
}

export const deleteProduct = async id => {
  return await productsApi.delete(`${id}`)
}
