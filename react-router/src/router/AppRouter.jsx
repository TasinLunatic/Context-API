import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";

export default function AppRouter() {
    return (<BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    );
};