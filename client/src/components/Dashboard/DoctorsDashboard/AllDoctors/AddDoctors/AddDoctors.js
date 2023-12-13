import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./AddDoctors.css";

const AddDoctors = () => {
  const [doctorData, setDoctorData] = useState({});
  const [image, setImage] = useState(null);
  const [percent,setPercent] = useState(0)
  const [url,setUrl] = useState('')
  const handleAddDoctor = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDoctorData = { ...doctorData };
    newDoctorData[field] = value;
    setDoctorData(newDoctorData);
  };

  const handleUpload = async() =>{
    if (!file) {
        alert("Please choose a file first!")
    }
    const storageRef = ref(storage,`/files/${file.name}` );
    const  uploadTask = uploadBytesResumable(storageRef,file);
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
          });
      }
  ); 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload()

    const formData = new FormData();
    for (const key in doctorData) {
      if (Object.hasOwnProperty.call(doctorData, key)) {
        const element = doctorData[key];
        formData.append(`${key}`, element);
      }
    }
    formData.append("image", url);

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
        <Button>LOLO</Button>
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
                    placeholder="Linkedin URL"
                    name="linkedin"
                    type="url"
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
                      placeholder="Twitter URL"
                      name="twitter"
                      type="url"
                      onChange={handleAddDoctor}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      className="text-secondary"
                      placeholder="Facebook URL"
                      name="facebook"
                      type="url"
                      onChange={handleAddDoctor}
                    />
                  </Form.Group>
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
                  Submits
                </Button>
                <Button
                  className="btn btn-primary mx-auto doctor-update"
                  type="submit"
                  onClick={handleUpload}
                >
                  upload
                </Button>
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

export default AddDoctors;
