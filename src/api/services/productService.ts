import api from "../axios"
import { endpoints } from "../endpoints"


export const getProduct = async () => {
  const response = await api.get(endpoints.product.all)
  return response.data
}

export const getSingleProduct = async (
  id: string
) => {
  const response = await api.get(`/products/${id}`)
  return response.data
}