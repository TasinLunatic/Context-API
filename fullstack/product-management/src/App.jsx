import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import ThemeProvider from "./provider/ThemeProvider";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      case "Help":
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar activePage={activePage} onNavigate={setActivePage} />
          <main className="flex-1 p-6 md:p-8">{renderPage()}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
