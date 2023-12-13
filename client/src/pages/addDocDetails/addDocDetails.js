import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, Card, Container, Form } from "react-bootstrap";
import axios from "../../utils/axiosConfig";
import { Navigate, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { adminAtom } from "../../store/atom";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../utils/firebase';
const AddDoctorsDetails = () => {
  const navigate = useNavigate();
  const initialDoctorData = {
    name: "",
    experience: 0,
    birthday: "",
    gender: "",
    phone: "",
    speciality: "",
    email: "",
    description: "",
    shifts: [],
    address: "",
    eduLines: {
      eduLine1: "",
      eduLine2: "",
      eduLine3: "",
    },
    awards: {
      awardFirst: "",
      awardSecond: "",
      awardThird: "",
    },
    moto: "",
    photo: "",
  };

  const [doctorData, setDoctorData] = useState(initialDoctorData);
  const [image, setImage] = useState(null);
  const [admin, setAdmin] = useAtom(adminAtom);
  const [percent,setPercent] = useState(0)
  const[url,setUrl] = useState('')
  const handleAddDoctor = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDoctorData = { ...doctorData };

    if (field === "shifts") {
      // Handle shifts as an array
      newDoctorData[field] = e.target.checked
        ? [...newDoctorData[field], value]
        : newDoctorData[field].filter((shift) => shift !== value);
    } else if (
      field === "eduLine1" ||
      field === "eduLine2" ||
      field === "eduLine3"
    ) {
      // Handle eduLines as nested objects
      newDoctorData.eduLines[field] = value;
    } else if (
      field === "awardFirst" ||
      field === "awardSecond" ||
      field === "awardThird"
    ) {
      // Handle awards as nested objects
      newDoctorData.awards[field] = value;
    } else {
      // Handle other fields
      newDoctorData[field] = value;
    }
    setDoctorData(newDoctorData);
  };

  const handleUpload = async() =>{
    return new Promise((resolve, reject) =>{
      if (!image) {
          alert("Please choose a file first!")
      }
      const storageRef = ref(storage,`/files/${image.name}` );
      const  uploadTask = uploadBytesResumable(storageRef,image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrl(url);
                console.log("url", url);
                resolve(url);
            });
        }
    ); 
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =  await handleUpload()

    const formData = new FormData();
    for (const key in doctorData) {
      if (Object.hasOwnProperty.call(doctorData, key)) {
        const element = doctorData[key];
        if (Array.isArray(element)) {
          element.forEach((value) => formData.append(`${key}[]`, value));
        } else if (typeof element === "object") {
          for (const subKey in element) {
            formData.append(`${key}[${subKey}]`, element[subKey]);
          }
        } else {
          formData.append(key, element);
        }
      }
    }
    doctorData.photo = url
    console.log("doctorData", doctorData);
    try {
      let token = localStorage.getItem("token");
      if (token) {
        const config = {
          headers: { Authorization: `JWT ${token}` },
        };
        console.log(config);
        console.log(token);
        let res = await axios.post("/api/doctor/addDoctor", doctorData, config);
        console.log("Res", res);
        console.log("object id", admin.id);

        console.log("referce id", admin.referenceId);

        if (res.status === 200) {
          navigate("/adminLogin");
        }
      }
    } catch (e) {
      console.log("error", e);
    }

    // formData.append("image", image);

    // fetch("http://localhost:7050/addDoctor", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "A doctor has been successfully added!",
    //         showConfirmButton: false,
    //         timer: 2000,
    //       });
    //     }
    //   });
  };

  return (
    <div style={{ backgroundColor: "#F4F7F6", padding: "20px 0" }}>
      <Container>
        <Card className="shadow p-3">
          <Card.Body>
            <Card.Text className="mb-3 fs-4">
              <b>GIVE SOME BASIC INFORMATION TO ADD A DOCTOR</b>
            </Card.Text>
            <Form onSubmit={handleSubmit} className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Control
                    className="text-secondary"
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    onChange={handleAddDoctor}
                    required
                  />
                </Form.Group>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="text-secondary"
                        placeholder="Date of Birth."
                        name="birthday"
                        type="date"
                        onChange={handleAddDoctor}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Select
                        className="text-secondary"
                        name="gender"
                        onChange={handleAddDoctor}
                        required={true}
                        aria-label="Default select example"
                      >
                        <option>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="text-secondary"
                    placeholder="Enter email address"
                    name="email"
                    type="email"
                    onChange={handleAddDoctor}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="text-secondary"
                    placeholder="description"
                    name="description"
                    type="string"
                    onChange={handleAddDoctor}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="text-secondary"
                    accept="image/*"
                    name="photo"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </Form.Group>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="text-secondary"
                        placeholder="Name of Certificate - 1"
                        name="eduLine1"
                        type="text"
                        onChange={handleAddDoctor}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="text-secondary"
                        placeholder="Name of Certificate - 2"
                        name="eduLine2"
                        type="text"
                        onChange={handleAddDoctor}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="text-secondary"
                        placeholder="Name of Certificate - 3"
                        name="eduLine3"
                        type="text"
                        onChange={handleAddDoctor}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Control
                    className="text-secondary"
                    placeholder="Experience as a doctor"
                    name="experience"
                    type="number"
                    onChange={handleAddDoctor}
                    required
                  />
                </Form.Group>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="text-secondary"
                        placeholder="Phone"
                        name="phone"
                        type="number"
                        onChange={handleAddDoctor}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Select
                        className="text-secondary"
                        name="speciality"
                        onChange={handleAddDoctor}
                        required={true}
                        aria-label="Default select example"
                      >
                        <option>Speciality</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Audiologist">Audiologist</option>
                        <option value="Fertility Consultant">
                          Fertility Consultant
                        </option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Oncologist">Oncologist</option>
                        <option value="Psychiatrists">Psychiatrists</option>
                        <option value="ENT specialist">ENT specialist</option>
                        <option value="Oocyte and Embryo">
                          Oocyte and Embryo
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Control
                      className="text-secondary"
                      placeholder="Present Address"
                      name="address"
                      type="text"
                      onChange={handleAddDoctor}
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Morning"
                      name="shifts"
                      value="morning"
                      onChange={handleAddDoctor}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Afternoon"
                      name="shifts"
                      value="afternoon"
                      onChange={handleAddDoctor}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Evening"
                      name="shifts"
                      value="evening"
                      onChange={handleAddDoctor}
                    />
                  </Form.Group>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="text-secondary"
                        placeholder="Honors and Awards - 1"
                        name="awardFirst"
                        type="text"
                        onChange={handleAddDoctor}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="text-secondary"
                        placeholder="Honors and Awards - 2"
                        name="awardSecond"
                        type="text"
                        onChange={handleAddDoctor}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="text-secondary"
                        placeholder="Honors and Awards - 3"
                        name="awardThird"
                        type="text"
                        onChange={handleAddDoctor}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <Button
                  className="btn btn-primary mx-auto doctor-update"
                  type="submit"
                >
                  Submit
                </Button>
                {/* <Button
                  className="btn btn-primary mx-auto doctor-update"
                  onClick={handleUpload}
                >
                  upload
                </Button> */}
                <Button
                  className="btn btn-primary mx-auto ms-3 doctor-delete"
                  type="reset"
                >
                  Reset
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AddDoctorsDetails;
