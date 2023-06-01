import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import ProtectedRoute from "./ProtectedRoute";
import Auth from "./pages/Auth/Auth";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/registration" element={<Auth />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Main />} index />
      </Route>
    </Routes>
  );
}
