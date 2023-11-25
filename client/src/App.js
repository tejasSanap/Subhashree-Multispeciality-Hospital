import AdminRegister from "./pages/adminRegister/AdminRegister";
import AdminLogin from "./pages/adminLogin/adminLogin.jsx";
import Test from "./pages/Test";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider, atom } from "jotai";
import AddDoctorsDetails from "./pages/addDocDetails/addDocDetails";
import DashboardMain from "./components/Dashboard/DashboardMain/DashboardMain";
import DoctorProfile from "./components/Dashboard/DoctorsDashboard/DoctorProfile/DoctorProfile";
import BlogForm from "./components/Blog/BlogForm/BlogForm";
import Appointment from "./components/Dashboard/DoctorsDashboard/Appointments/Appointment";
import Home from "./components/Home/Home/Home";
import SingleDoctor from "./components/SingleDoctor/SingleDoctor";
import Login from "./components/Login/Login";
import AppointmentHeader from "./components/Home/Appointment/AppointmentHeader";
import HospitalDetails from "./components/Dashboard/HospitalDetails/HospitalDetails";
import AllDoctors from "./components/Dashboard/DoctorsDashboard/AllDoctors/AllDoctors/AllDoctors";
import DoctorProfile2 from "./components/Dashboard/DoctorsDashboard/DoctorProfile2/DoctorProfile2";
import DoctorHeader from "./components/Pages/Team/DoctorHeader";
import SingleBlog from "./components/Blog/SingleBlog/SingleBlog";
import FAQ from "./components/Pages/FAQ/FAQ";
import Team from "./components/Pages/Team/Team";
import Contact from "./components/Pages/Contact/Contact";
import AboutHome from "./components/Pages/History/AboutHome/AboutHome";
import Service from "./components/Service/Service";
import Review from "./components/Pages/review/Review";
import Blogs from "./components/Blog/Blogs/Blogs";
import Oncologist from "./components/Specialization/Oncologist/Oncologist";
import Audiologist from "./components/Specialization/Audiologist/Audiologist";
import Cardiologist from "./components/Specialization/Cardiologist/Cardiologist";
import Neurologist from "./components/Specialization/Neurologist/Neurologist";
import Psychiatrists from "./components/Specialization/Psychiatrists/Psychiatrists";
import ENTspecialist from "./components/Specialization/ENTspecialist/ENTspecialist";

// import { tokkenAtom } from './store/atoms';

// export const tokkenAtom = atom(null);

function App() {
  // const tokkenAtom = atom('');
  console.log("lol")
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/test" element={<Test />} />
          <Route path="/addDocDetails" element={<AddDoctorsDetails />} />
          <Route path="/dashboard" element={<DashboardMain />}>
            <Route path="update" element={<DoctorProfile />}></Route>
            <Route path="blogForm" element={<BlogForm />}></Route>
            <Route path="appointments" element={<Appointment />}></Route>
            <Route path="hospitalDetails" element={<HospitalDetails />}></Route>
            <Route
              path="adminAppointments"
              element={<HospitalDetails />}
            ></Route>
            <Route path="allDoctors" element={<AllDoctors />}></Route>
            <Route path="allDoctors/update/:id" element={<DoctorProfile2 />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/singleDoctor/:id" element={<SingleDoctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment" element={<AppointmentHeader />} />
          <Route path="/specialization/oncologist" element={<Oncologist />} />
          <Route path="/specialization/audiologist" element={<Audiologist />} />
          <Route
            path="/specialization/cardiologist"
            element={<Cardiologist />}
          />
          <Route path="/specialization/neurologist" element={<Neurologist />} />
          <Route
            path="/specialization/psychiatrists"
            element={<Psychiatrists />}
          />
          <Route
            path="/specialization/ent-specialist"
            element={<ENTspecialist />}
          />

          <Route path="/doctor" element={<DoctorHeader />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<AboutHome />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/appointment" element={<AppointmentHeader />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/review" element={<Review />} />
          {/* </Route> */}
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
