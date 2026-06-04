import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createProduct, deleteProduct, getProduct, getSingleProduct, updateProduct } from "../../api/services/productService"


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

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      })

      queryClient.invalidateQueries({
        queryKey: [
          "product",
          variables.id,
        ],
      })

    },
  })
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      })
    },
  })
}


