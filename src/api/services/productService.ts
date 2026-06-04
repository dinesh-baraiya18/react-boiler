import type { CreateProductPayload, ProductType } from "../../types/product.types"
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

export const createProduct = async (product: CreateProductPayload) => {
  const response = await api.post<ProductType>("/products", product)
  return response.data
}

export const updateProduct = async ({ id, data, }: {
  id: string
  data: Partial<CreateProductPayload>
}) => {
  const response = await api.put<CreateProductPayload>(`/products/${id}`, data)
  return response.data
}

export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`)
  return response.data
}
