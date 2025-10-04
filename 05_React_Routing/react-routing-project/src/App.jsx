import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ParamCompo from "./components/ParamCompo";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children: [
      { path: "courses", element: <Courses /> },
      { path: "mock-test", element: <MockTest /> },
      { path: "reports", element: <Reports /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "/student/:id",
    element: (
      <>
        <Navbar />
        <ParamCompo />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
