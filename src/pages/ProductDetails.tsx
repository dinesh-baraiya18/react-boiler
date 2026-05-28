import { useParams } from "react-router-dom"
import { useProduct } from "../hooks/api/useProducts"

const ProductDetails = () => {
  const { id: productId } = useParams()

  const {
    data: product,
    isLoading,
    error,
  } = useProduct(productId || "")

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Something went wrong</p>
  }

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">

            <span className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
              In Stock
            </span>

            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              {product.title}
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-3xl font-bold text-black">
                ${product.price}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                20% OFF
              </span>
            </div>

            <p className="mt-6 text-base leading-8 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button className="btn">
                Add To Cart
              </button>

              <button className="btn bg-green-600 text-white hover:bg-green-700">
                Buy Now
              </button>
            </div>

            <div className="mt-10 grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-2">

              <div>
                <p className="text-sm text-gray-500">
                  Product ID
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  #{product.id}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Created At
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {new Date(product.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails