import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ redirectPath = "/login" }) {
  const refresh = localStorage.getItem("refresh");

  if (!refresh) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
