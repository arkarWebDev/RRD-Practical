import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./layouts/Main";
import { Posts, PostDetails, Home, About, Error } from "./pages/index";
import { loader as postsLoader } from "./pages/Posts";
import { loader as postDetailsLoader } from "./pages/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "/product/:postID",
        element: <PostDetails />,
        loader: postDetailsLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
