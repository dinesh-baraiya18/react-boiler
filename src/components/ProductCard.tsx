import { Link } from "react-router-dom"
import type { ProductType } from "../types/product.types"

interface ProductCardProps {
  product: ProductType
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      <div className="aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">

        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
            {product.title}
          </h3>

          <span className="shrink-0 rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
            ${product.price}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-gray-600 mb-3">
          {product.description}
        </p>

        <button className="btn w-full">
          Add to Cart
        </button>
      </div>
    </Link>
  )
}

export default ProductCard