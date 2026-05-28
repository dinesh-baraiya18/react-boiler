
export const endpoints = {
  auth: {
    login: "/auth/login",
    porfile: "/auth/profile"
  },
  product: {
    all: "/products",
    detail: (id: string) => `products/${id}`
  },
  blog: {
    all: "/blog",
    detail: (id: string) => `blog/${id}`
  }
}