import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Appointment.css";
import axios from "../../../utils/axiosConfig";
import { userAtom } from "../../../store/atom";
import { useAtom } from "jotai";

const Appointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [Specialist, setSpecialist] = useState([]);
  const [shiftDoctor, setShiftDoctor] = useState([]);
  const [doctorEmail, setDoctorEmail] = useState([]);
  const [doctorId, setDoctorId] = useState([]);
  // const { user } = useFirebase();
  // const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useAtom(userAtom)
  console.log(user.email);
  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await axios.get("/api/doctor/getAllDoctors");
      setDoctors(res.data);
    }
    fetchDoctors();
  }, [])

  console.log("doctors", doctors);
  // useEffect(() => {
  //   fetch("http://localhost:7050/doctors")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDoctor(data);
  //     });
  // }, []);


  const onSubmit = (data, e) => {
    e.preventDefault();
    data.status = "pending";
    data.doctorEmail = doctorEmail;
    data.patientId = user.id;
    data.doctorId = doctorId
    console.log("data", data);
    let dp = '';
    doctors.map((dc)=>{
      if(dc.email===data.doctorEmail){
        dp = dc.phone;
      }
    })
    data.doctorNumber = dp;
    axios.post("/api/appointment/addappointment",data,{
      headers: {
        'Content-Type': 'application/json',
        'Patients-age': data.age,
        'Doctor-appointments' : data.doctor,
        'Patients-gender' : data.gender,
        'Patients-service' : data.service,
        'Appointment-shift' : data.shift,
        "Appointment-status": "pending",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        // successfull modal
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your appointment has been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const handleOnBlurService = (e) => {
    const filteredDoctor = doctors.filter(
      (doctor) => doctor?.speciality === e.target.value
    );
    setSpecialist(filteredDoctor);
  };

  const handleOnBlurShift = (e) => {
    console.log("spec", Specialist);
    const filteredDoc = Specialist.filter((doc) => {
      const arr = doc.shifts?.map((shift) => {
        return shift;
      });
      let v = String(e.target.value);

      if (arr.includes(e.target.value)) {
        return true;
      }
      return false;
    })
    console.log("filterd", filteredDoc);

    // const filteredDoctor = Specialist.filter(
    //   (doctors) => {
    //     console.log("shifts", doctors.shifts);
    //     return doctors?.shifts.some(e.target.value)
    //   }
    // );
    setShiftDoctor(filteredDoc);
    // console.log(filteredDoctor);
  };


  // const handleOnBlurShift = (selectedShifts) => {
  //   const filteredDoctors = Specialist.filter((doctor) =>
  //     selectedShifts.some((selectedShift) =>
  //       doctor.shift.includes(selectedShift)
  //     )
  //   );
  //   setShiftDoctor(filteredDoctors);
  //   console.log(filteredDoctors);
  // };


  const handleOnChangeEmail = (e) => {
    const doctorEmail = shiftDoctor.find(
      (doctor) => doctor.name === e.target.value
    );
    setDoctorId(doctorEmail?._id);
    setDoctorEmail(doctorEmail?.email);
  };

  return (
    <div className="appointment_container">
      <div className="container ">
        <h4 className="appointment mb-4">Book Appointment</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="gy-4">
            <div className="col-md-6 col-lg-5">
              <input
                type="text"
                placeholder="First name"
                {...register("firstName", { required: true, maxLength: 80 })}
                className="input-field-name"
              />
            </div>
            <div className="col-md-6 col-lg-5 ">
              <input
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: true, maxLength: 100 })}
                className="input-field-name"
              />{" "}
            </div>
            <div className="col-md-6 col-lg-2">
              <input
                type="number"
                placeholder="age"
                {...register("age", { required: true })}
                className="service-doctor-shift"
              />
            </div>
            <div className="col-md-6 col-lg-2">
              <select
                aria-label="Default select example"
                {...register("gender", { required: true })}
                className="service-doctor"
              >
                <option>- Gender -</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-5">
              <input
                type="email"
                placeholder="Email"
                {...register("patientEmail", {
                  required: true
                })}
                className="service-doctor-shift"
              // value={user.email}
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("mobileNumber", {
                  required: true,
                })}
                className="service-doctor-shift"
              />{" "}
            </div>

            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("service")}
                onBlur={handleOnBlurService}
                className="service-doctor"
              >
                <option>- Specialist -</option>
                {doctors.map((doctor) => (
                  <option value={doctor.speciality}>{doctor.speciality}</option>
                ))}
                {/* <option value="Oncologist">Oncologist</option>
                <option value="ENT Specialist">ENT Specialist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Audiologist">Audiologist</option>
                <option value="Psychiatrists">Psychiatrists</option>
                <option value="Gynecologist">Gynecologist</option> */}
              </select>
            </div>
            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("shift", { required: true })}
                onBlur={handleOnBlurShift}
                className="service-doctor"
              >
                <option>- Shift -</option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
            </div>

            <div className="col-md-6 col-lg-3">
              <select
                aria-label="Default select example"
                {...register("doctor", { required: true })}
                className="service-doctor"
                onChange={handleOnChangeEmail}
              >
                <option>- Doctor -</option>
                {shiftDoctor.map((doctor) => (
                  <option>{doctor.name}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6 col-lg-3">
              <input
                type="date"
                {...register("date", { required: true })}
                className="service-doctor-shift"
              />
            </div>

            <div className="col-md-12">
              <textarea
                placeholder="Please type what you want..."
                rows="5"
                {...register("description", { required: false })}
                className="description-box"
              ></textarea>{" "}
            </div>
            <button type="submit" className="pulse" >
              {" "}
              Submit{" "}
            </button>
          </Row>
        </form>

      </div>
    </div>
  );
};

export default Appointment;
