import React from 'react';

import fightersInfo from './fighter-info';

// STYLING
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//UI COMPONENTS
import NavBar from './components/ui/navbar/Navbar';

//PAGE COMPONENTS
import FightersIndex from './components/pages/fighters-index/FightersIndex';

//RRD COMPONENTS
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/fighters' element={<FightersIndex fighters={fightersInfo} />} />
      </Routes>
    </>
  );
}

export default App;
