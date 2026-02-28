import { BrowserRouter, Routes, Route } from "react-router";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RootLayout from "../pages/RootLayout";
import MainContent from "../components/MainContent";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export default function AppRouter() {
    return (<BrowserRouter>
     <Routes>
      <Route path="/" element={<RootLayout />}> 
        <Route index element={<Dashboard/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path=":profileID" element={<Profile/>} />
        <Route path="settings" element={<h1>settings</h1>} />
        <Route path="help" element={<h1>Help</h1>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    );
};