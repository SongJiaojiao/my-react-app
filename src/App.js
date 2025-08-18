import React from 'react';
import Tradedesktop from './Components/Tradedesktop';
import Search from './Components/Search';
import Home from './Components/Home';
import Roostify from './Components/Roostify';
import Lighthouse from './Components/Lighthouse';
import DataAI from './Components/DataAI';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Contexts/authContext.js'
import './index.css'


export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Tradedesktop />} />
          <Route path="/dataai" element={<DataAI />} />
          <Route path="/search" element={<Search />} />
          <Route path="/roostify" element={<Roostify />} />
          <Route path="/lighthouse" element={<Lighthouse />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}
