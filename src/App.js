import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
