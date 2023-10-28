import logo from './logo.svg';
import './App.css';

import AdminRegister from './pages/adminRegister/AdminRegister';
import AdminLogin from './pages/adminLogin/adminLogin.jsx';
import Test from './pages/Test';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider, atom } from 'jotai';
// import { tokkenAtom } from './store/atoms';

export const tokkenAtom = atom(null);

function App() {
  // const tokkenAtom = atom('');
  return (
    <div className="App">
      <Router>
    <Link to ="/adminLogin">login</Link>
    <Link to ="/test">test</Link>
        <Routes>
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path='/test' element = {<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
