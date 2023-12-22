import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PcBuilderPage } from "./pages/PcBuilderPage";
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="main-app">
        <Router style={{backgroundColor: 'red'}}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/About" element={<AboutPage/>}/>
            <Route exact path="/Contact_Us" element={<ContactUsPage/>} />
            <Route exact path="/Design_Studio" element={<PcBuilderPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Router>
    </div>
);
}

export default App;
