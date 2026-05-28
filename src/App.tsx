import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

const App = () => {

  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/blog", element: <Blog /> },
          { path: "/blog/:id", element: <BlogDetails /> },
          { path: "/product", element: <Product /> },
          { path: "/product/:id", element: <ProductDetails /> },
        ]
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  );
};

export default App;
