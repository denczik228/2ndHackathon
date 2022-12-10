import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Budget from "./Budget";

function App() {
 
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  {
    path: "/budget",
    element: <Budget />
  }
  ]);


  return (
    <>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}

export default App