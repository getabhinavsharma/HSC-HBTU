import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './index.css'
import AppWithFallback from './App.jsx'
import EventWithFallback from './Components/Events/Event.jsx';
import TeamWithFallback from './Components/Team/Team.jsx';
import Gallary from './Components/throwback/gallary.tsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer2 from './Components/Footer/Footer2.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppWithFallback />} />
          <Route path="/Events" element={<EventWithFallback />} />
          <Route path="/Team" element={<TeamWithFallback />} />
          <Route path="/throwback" element={<Gallary />} />
        </Routes>
      </Suspense>
      <Footer2 />
    </Router>
  </React.StrictMode>,
);
