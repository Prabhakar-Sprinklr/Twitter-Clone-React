import React from 'react';
import './App.css';
import Profile from './pages/profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
