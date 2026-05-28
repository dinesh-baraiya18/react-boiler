import ProductCard from "../components/ProductCard"
import QueryWrapper from "../components/QueryWrapper"
import { useProducts } from "../hooks/api/useProducts"
import type { ProductType } from "../types/product.types"

const Product = () => {
  const { isLoading, error, data: products } = useProducts()

  return (
    <QueryWrapper isLoading={isLoading} error={error}>
      <section className="py-14">
        <div className="container">
          <h2>Product</h2>

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
    </QueryWrapper>
  )
}

export default Product