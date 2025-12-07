import { authApi } from "../services/api";
import { authService } from "../services/auth";
import { useState, useCallback } from "react";


interface SignupData {
    name: string;
    email: string;
    password: string;
  }
  
  interface LoginData {
    email: string;
    password: string;
  }
  
  export const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const signup = useCallback(async (userData: SignupData) => {
      setLoading(true);
      setError("");
  
      try {
        const response = await authApi.signup(userData);
  
        if (response?.data?.token) {
          authService.setToken(response.data.token);
        }
  
        return response;
      } catch (err: any) {
        setError(err.message || "Signup failed");
        throw err;
      } finally {
        setLoading(false);
      }
    }, []);
  
    const login = useCallback(async (credentials: LoginData) => {
      setLoading(true);
      setError("");
  
      try {
        const response = await authApi.login(credentials);
  
        if (response?.data?.token) {
          authService.setToken(response.data.token);
        }
  
        return response;
      } catch (err: any) {
        setError(err.message || "Login failed");
        throw err;
      } finally {
        setLoading(false);
      }
    }, []);
  
    const getProfile = useCallback(async () => {
      setLoading(true);
      setError("");
  
      try {
        const response = await authApi.getProfile();
        return response;
      } catch (err: any) {
        setError(err.message || "Failed to fetch profile");
        throw err;
      } finally {
        setLoading(false);
      }
    }, []);
  
    return {
      loading,
      error,
      clearError: () => setError(""),
      signup,
      login,
      getProfile,
    };
  };