import AdminRegister from './pages/adminRegister/AdminRegister';
import AdminLogin from './pages/adminLogin/adminLogin.jsx';
import Test from './pages/Test';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider, atom } from 'jotai';
import AddDoctorsDetails from './pages/addDocDetails/addDocDetails';
import DashboardMain from './components/Dashboard/DashboardMain/DashboardMain';
import DoctorProfile from "./components/Dashboard/DoctorsDashboard/DoctorProfile/DoctorProfile"
import BlogForm from './components/Blog/BlogForm/BlogForm';
import Appointment from './components/Dashboard/DoctorsDashboard/Appointments/Appointment';
// import { tokkenAtom } from './store/atoms';

// export const tokkenAtom = atom(null);

function App() {
  // const tokkenAtom = atom('');
  return (
    <div className="App">
      <Router>
        <Link to="/adminLogin">login</Link>
        <Link to="/test">test</Link>
        <Link to="/adminRegister">register</Link>
        <Routes>
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path='/test' element={<Test />} />
          <Route path='/addDocDetails' element={<AddDoctorsDetails />} />

          <Route path='/dashboard' element={<DashboardMain />} >
            <Route path='update' element={<DoctorProfile />}>
            </Route>
            <Route path='blogForm' element={<BlogForm />}></Route>
            <Route path='appointments' element={<Appointment />}></Route>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
