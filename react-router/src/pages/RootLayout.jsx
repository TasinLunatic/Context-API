import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="relative z-10 min-w-0 flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
