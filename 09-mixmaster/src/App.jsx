import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  NewsLetter,
  Error,
  Cocktails,
  About,
} from "./pages";
import { loader as LandingLoader } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        // path: "landing",
        loader: LandingLoader,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktails",
        element: <Cocktails />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};
export default App;
