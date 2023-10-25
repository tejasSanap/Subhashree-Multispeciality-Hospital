import logo from './logo.svg';
import './App.css';

import AdminRegister from './pages/adminRegister/AdminRegister.js';
import AdminLogin from './pages/adminLogin/adminLogin.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
