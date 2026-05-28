import { useMutation, useQuery } from "@tanstack/react-query"
import { createProduct, getProduct, getSingleProduct } from "../../api/services/productService"


export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  })
}

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),

    enabled: !!id,
  })
}


export const useCreateProduct = () => {
  return useMutation({ mutationFn: createProduct })
}