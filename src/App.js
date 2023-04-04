import React, { createContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";
import Subscription from "./pages/Subscription";
import News from "./components/News";
import Opinion from "./components/Opinion";
import HowTo from "./components/HowTo";
import Review from "./components/Review";
import EditPost from "./components/EditPost";

// Create AuthContext
export const AuthContext = createContext();

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/editpost/:id",
        element: <EditPost />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
      {
        path: "/opinion/:id",
        element: <Opinion />,
      },
      {
        path: "/how-to/:id",
        element: <HowTo />,
      },
      {
        path: "/review/:id",
        element: <Review />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    // Wrap the app with AuthContext.Provider and pass the value of authenticated and setAuthenticated
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
