import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ redirectPath = '/login', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
