import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/main/Main';

import './App.css';

const App=() =>{
 
 const[sidebarOpen,setsidebarOpen]=useState(false)
 const OpenSidebar =() =>{
   setsidebarOpen(true);
 };
 const closeSidebar=() =>{
   setsidebarOpen(false);
 }
 
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} OpenSidebar={OpenSidebar}/>
      <Main  SidebarOpen={sidebarOpen} closeSideba={closeSidebar}/>
     <Sidebar SidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    
    </div>
  );
}

export default App;
