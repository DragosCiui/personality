import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";

  return isLoggedIn ? <Navigate to="/" /> : children;
}
