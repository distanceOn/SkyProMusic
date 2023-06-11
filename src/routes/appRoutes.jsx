import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../pages/Main/Main";
import Auth from "../pages/Auth/Auth";

export default function AppRoutes() {
  const refresh = localStorage.getItem("refresh");

  const navigate = useNavigate();
  useEffect(() => {
    if (refresh) {
      navigate("/");
    } else if (window.location.pathname !== "/registration") {
      navigate("/login");
    }
  }, [navigate, refresh]);
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/registration" element={<Auth />} />

      <Route path="/" element={<Main />} index />
    </Routes>
  );
}
