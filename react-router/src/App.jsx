import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import ThemeProvider from "./provider/ThemeProvider";

function App() {
   const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider> 
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <div className='flex flex-1'>
        <Sidebar />
        <MainContent />
      </div>     
    </div>
    </ThemeProvider>
  )
}

export default App;
