import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/main";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute isAllowed={false} />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}
