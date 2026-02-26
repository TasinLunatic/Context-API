import React from 'react'
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import ThemeProvider from "../provider/ThemeProvider";
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
   <ThemeProvider> 
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <div className='flex flex-1'>
        <Sidebar />
        <Outlet />
        {/* <MainContent /> */}
      </div>     
    </div>
    </ThemeProvider>
  );
}
