import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import {
  About,
  Login,
  CreateAccount,
  NotFound,
  Settings,
  RootLayout,
  Dashboard,
  Profile,
  ProductManagement,
  Help,
} from "../pages";
import ThemeProvider from "../provider/ThemeProvider";
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
              <Route path="profile" element={<ProtectedProfile />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="profile/:profileID" element={<ProtectedProfile />} />
              <Route path="about" element={<About />} />
              <Route path="settings" element={<Settings />} />
              <Route path="help" element={<Help />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
