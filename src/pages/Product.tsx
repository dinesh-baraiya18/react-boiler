import { useState, type FormEvent } from "react"
import ProductCard from "../components/ProductCard"
import QueryWrapper from "../components/QueryWrapper"
import { useCreateProduct, useProducts } from "../hooks/api/useProducts"
import type { ProductType } from "../types/product.types"

const Product = () => {
  const { isLoading, error, data: products } = useProducts()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const { mutate, isPending } = useCreateProduct()

  const handleCreateProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const category = formData.get('category') as string;
    const image = formData.get('image') as string;

    mutate({ title, description, price, category, image }, {
      onSuccess: () => {
        setIsCreateModalOpen(false);
        console.log("Product created successfully");
      }
    })
  }

  return (
    <QueryWrapper isLoading={isLoading} error={error}>
      <section className="py-14">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2>Product</h2>
            <button className="btn" onClick={() => setIsCreateModalOpen(true)}>
              create
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.map((product: ProductType) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
      {isCreateModalOpen && <CreateProductModal setIsCreateModalOpen={setIsCreateModalOpen} handleCreateProduct={handleCreateProduct} isPending={isPending} />}
    </QueryWrapper>
  )
}

const CreateProductModal = ({ setIsCreateModalOpen, handleCreateProduct, isPending }:
  { setIsCreateModalOpen: (isOpen: boolean) => void; handleCreateProduct: (e: FormEvent<HTMLFormElement>) => void; isPending: boolean }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-30">
      <div className="bg-white p-6 rounded-lg min-w-100 z-50 relative">
        <div className="relative mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-0">Create Product</h2>
          <button className="btn bg-red-300" onClick={() => setIsCreateModalOpen(false)}>
            X
          </button>
        </div>
        <form onSubmit={handleCreateProduct}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
            <input type="text" name="title" id="title" className="w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="description">description</label>
            <input type="text" name="description" id="description" className="w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="price">price</label>
            <input type="number" name="price" id="price" className="w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="category">category</label>
            <input type="text" name="category" id="category" className="w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="image">image</label>
            <input type="text" name="image" id="image" className="w-full" />
          </div>
          <div className="mb-4">
            <button type="submit" className="btn" > {
              isPending
                ? "Creating..."
                : "Create Product"
            }</button>
          </div>
        </form>

      </div>
      <div onClick={() => setIsCreateModalOpen(false)} className="fixed inset-0 z-20 bg-black/50 " />
    </div>
  )
}

export default Product