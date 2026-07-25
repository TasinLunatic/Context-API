import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") return null;
    const savedUser = window.localStorage.getItem("auth-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email) => {
    const name = email.split("@")[0];
    const userData = {
      email,
      name: name.charAt(0).toUpperCase() + name.slice(1),
    };

    setUser(userData);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("auth-user", JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("auth-user");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: Boolean(user), login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export default AuthContext;
