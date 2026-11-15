import { createBrowserRouter, Outlet } from "react-router";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Pedidos from "./pages/Pedidos.tsx";
import PublicRouter from "./components/PublicRouter.tsx";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#161410] text-white">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRouter>
        <Login />
      </PublicRouter>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRouter>
        <Register />
      </PublicRouter>
    ),
  },
]);
