import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { toast } from "react-toastify";
import { getCookie, setCookie } from "../helper/cookie";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const token = getCookie("accessToken");
  const isLoggedIn = !!token;
  const signIn = async (values) => {
    try {
      const resp = await login(values);
      setCookie("accessToken", resp.data.token);
      setCookie("refreshToken", resp.data.refresh_token); 
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ showPassword, setShowPassword, signIn, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

