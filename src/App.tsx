import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import FileExplorer from "./pages/FileExplorer/FileExplorer";
import NestedComments from "./pages/NestedComments/NestedComments";
import InterviewTask from "./pages/Interview-task/InterviewTask";

const App = () => {

  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/file-explorer", element: <FileExplorer /> },
          { path: "/nested-comments", element: <NestedComments /> },
          { path: "/blog", element: <Blog /> },
          { path: "/blog/:id", element: <BlogDetails /> },
          { path: "/product", element: <Product /> },
          { path: "/product/:id", element: <ProductDetails /> },
          { path: "/interview-task", element: <InterviewTask /> },
        ]
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  );
};

export default App;
