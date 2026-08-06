import { useState } from "react";
import clsx from "clsx";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import ProductManagement from "./pages/ProductManagement";
import ThemeProvider from "./provider/ThemeProvider";
import useTheme from "./hooks/useTheme";

function AppContent() {
  const [activePage, setActivePage] = useState("Dashboard");
  const { theme } = useTheme();

  const renderPage = () => {
    switch (activePage) {
      case "Profile":
        return <Profile />;
      case "Products":
      case "ProductManagement":
        return <ProductManagement />;
      case "Settings":
        return <Settings />;
      case "Help":
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
        <main
          className={clsx(
            "flex-1 p-6 md:p-8 transition-colors duration-300",
            theme === "light"
              ? "bg-slate-100 text-slate-900"
              : "bg-slate-950 text-slate-100",
          )}
        >
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
