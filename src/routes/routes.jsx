import App from "../App";
import Home from "../components/Home";
import Shop from "../components/Shop";
import FullCard from "../components/FullCard";
import Cart from "../components/Cart";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "shop/:category/:cardId",
        element: <FullCard />
      },
      {
        path: "cart",
        element: <Cart />
      },
    ],
  }
]

export default routes;