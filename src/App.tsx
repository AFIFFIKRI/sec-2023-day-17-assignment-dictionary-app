import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Definition from './pages/Definition'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:word",
      element: <Definition />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
