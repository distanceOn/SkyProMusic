import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../pages/Main/Main";
import Auth from "../pages/Auth/Auth";
import { useRefreshTokenMutation } from "../redux/services/api";

export default function AppRoutes() {
  const refresh = localStorage.getItem("refresh");

  const [userRefreshToken] = useRefreshTokenMutation();

  const [intervalId, setIntervalId] = useState(null);

  const refreshToken = async () => {
    const accessToken = await userRefreshToken({ refresh: refresh });
    localStorage.setItem("access", accessToken.data.access);
    console.log(localStorage);
  };

  const startInterval = () => {
    const id = setInterval(refreshToken, 120000);
    setIntervalId(id);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (refresh) {
      navigate("/");
      startInterval();
    } else if (window.location.pathname !== "/registration") {
      navigate("/login");
      stopInterval();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, refresh]);
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/registration" element={<Auth />} />

      <Route path="/" element={<Main />} index />
    </Routes>
  );
}
