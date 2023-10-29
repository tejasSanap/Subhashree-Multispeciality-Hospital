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
import Home from './components/Home/Home/Home'
import SingleDoctor from './components/SingleDoctor/SingleDoctor'
import Login from "./components/Login/Login"
import AppointmentHeader from './components/Home/Appointment/AppointmentHeader';
// import { tokkenAtom } from './store/atoms';

// export const tokkenAtom = atom(null);

function App() {
  // const tokkenAtom = atom('');
  return (
    <div className="App">
      <Router>
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

          <Route path="/home" element={<Home />} />
          <Route path="/singleDoctor/:id" element={<SingleDoctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/appointment' element={<AppointmentHeader />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
