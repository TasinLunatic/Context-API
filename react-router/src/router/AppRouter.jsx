import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RootLayout from "../pages/RootLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ThemeProvider from "../provider/ThemeProvider";
import Settings from "../pages/Settings";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function ProtectedProfile() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Profile /> : <Navigate to="/login" replace />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile/:profileID" element={<ProtectedProfile />} />
              <Route path="about" element={<About />} />
              <Route path="settings" element={<Settings />} />
              <Route path="help" element={<h1>Help</h1>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
