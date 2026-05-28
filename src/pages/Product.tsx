import ProductCard from "../components/ProductCard"
import { useProducts } from "../hooks/api/useProducts"
import type { ProductType } from "../types/product.types"

const Product = () => {
  const { isLoading, error, data: products } = useProducts()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <section className="py-14">
      <div className="container">
        <h2>Product</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product: ProductType) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>

  )
}

export default Product