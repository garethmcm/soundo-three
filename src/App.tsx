// import React from 'react';
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";

import NavBar from './Components/NavBar';
import Router from './Components/Router';
import Footer from './Components/Footer';

import Logo from './assets/Soundo.svg';

function App() {
  return (
    <div>            
      <div className="font-absans text-text bg-background min-h-screen overflow-hidden relative">
      <img
        src={Logo}
        alt="Logo"
        className="absolute right-0 transform translate-x-1/4 -translate-y-1/4 w-50 mt-60 opacity-70"
      />
        <NavBar />
        <div>
        <Router />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;