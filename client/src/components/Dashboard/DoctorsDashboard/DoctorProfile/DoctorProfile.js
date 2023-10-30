import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
// import { useGetDoctorsQuery } from "../../../../features/sigmaApi";
import "./DoctorProfile.css";
import { useAtom } from "jotai";
import { adminAtom, doctorAtom } from "../../../../store/atom";
import axios from "../../../../utils/axiosConfig";

const DoctorProfile = () => {
  const [doctor, setDoctor] = useAtom(doctorAtom);
  const [admin, setAdmin] = useAtom(adminAtom)
  useEffect(() => {
    const getDocInfo = async () => {
      const res = await axios.get(`/api/doctor/getDoctor/${admin.referenceId}`)
      console.log("doc info", res.data);
      if (res.status === 200) {
        setDoctor(res.data);
        localStorage.setItem('doctor', JSON.stringify(res.data));
      }
    };
    getDocInfo();
    console.log("referenc id is ", admin.referenceId);
  }, []);





  console.log("uid", doctor._id)
  // const alldoctorInfo = useGetDoctorsQuery();
  const [singleDoctorInfo, setSingleDoctorInfo] = useState([]);
  const [doctorUpdateData, setDoctorUpdateData] = useState({});
  const [selectedShifts, setSelectedShifts] = useState([]);
  // console.log("doc", doctor.eduLines.eduLine1)
  // useEffect(() => {
  //   // const doctorData = alldoctorInfo?.data?.find(
  //   //   (doctorId) => doctorId._id === id
  //   // );
  //   // setSingleDoctorInfo(doctorData);
  // }, [alldoctorInfo?.data, id]);

  const handleUpdateDoctor = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDoctorData = { ...doctorUpdateData };

    // Check if the field is part of awards
    if (field === "awardFirst" || field === "awardSecond" || field === "awardThird") {
      // If it's an awards field, update the awards object
      newDoctorData.awards = {
        ...newDoctorData.awards,
        [field]: value,
      };
    } else if (field === "eduLine1" || field === "eduLine2" || field === "eduLine3") {
      // If it's an eduLine field, update the eduLines object
      newDoctorData.eduLines = {
        ...newDoctorData.eduLines,
        [field]: value,
      };
    } else {
      // For other fields, update directly
      newDoctorData[field] = value;
    }
    setDoctorUpdateData(newDoctorData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('data', doctorUpdateData)

    const resp = await axios.put(`/api/doctor/updateDoctor/${doctor._id}`, doctorUpdateData);
    console.log("updated res", resp);
    // fetch(`http://localhost:7050/updateDoctor/${id}`, {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(doctorUpdateData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "Doctor's informatoin has been successfully updated!",
    //         showConfirmButton: false,
    //         timer: 2000,
    //       });
    //     }
    //   });
  };

  return (
    <div style={{ backgroundColor: "#F4F7F6", padding: "20px 0" }}>
      <Container>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Card className="text-center card-control2">
              <Card.Img
                className="w-50 mx-auto rounded-circle mt-3"
                variant="top"
                src={`data:image/*;base64,${singleDoctorInfo?.photo}`}
              />
              <Card.Body>
                <Card.Title>{doctor?.name}</Card.Title>
                <Card.Text>{doctor?.title}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-control2 mt-5">
              <Card.Body>
                <Card.Title>Info</Card.Title>
                <Card.Text className="mt-3">
                  <i className="fas fa-home"></i> Address: <br />
                  {doctor?.address}
                </Card.Text>
                <Card.Text className="mt-3">
                  <i className="fas fa-envelope"></i> Email: <br />
                  {doctor?.email}
                </Card.Text>
                <Card.Text className="mt-3">
                  <i className="fas fa-mobile"></i> Mobile: <br />
                  {doctor?.phone}
                </Card.Text>
                <Card.Text className="mt-3">
                  <i className="fas fa-birthday-cake"></i> Birth Date: <br />
                  {doctor?.birthday}
                </Card.Text>
                <hr />
                <Card.Title className="mb-3">Social</Card.Title>
                <a
                  href={doctor?.twitter}
                  className="text-dark text-decoration-none"
                >
                  <i className="fab fa-twitter me-3"></i>Twitter
                </a>{" "}
                <br />
                <a
                  href={doctor?.facebook}
                  className="text-dark text-decoration-none"
                >
                  <i className="fab fa-facebook-f me-4"></i>Facebook
                </a>{" "}
                <br />
                <a
                  href={doctor?.linkedin}
                  className="text-dark text-decoration-none"
                >
                  <i className="fab fa-linkedin-in me-4"></i>Linkedin
                </a>
              </Card.Body>
            </Card>
          </div>


          <div className="col-12 col-sm-6 col-md-6 col-lg-8">
            <Card className="card-control2 p-4">
              <Card.Title>Update Doctor Information</Card.Title>
            </Card>

            <Card className="mt-5 card-control2">
              <Card.Body>
                <Card.Text className="mb-3">Basic Information</Card.Text>
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.name}
                          placeholder="Full Name"
                          name="name"
                          type="text"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.birthday}
                          placeholder="Birth Date"
                          name="birthday"
                          type="date"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Select
                          className="text-secondary"
                          defaultValue={doctor?.gender}
                          name="gender"
                          onBlur={handleUpdateDoctor}
                        >
                          <option>Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.email}
                          placeholder="Enter email address"
                          name="email"
                          type="email"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.eduLines.eduLine1 || ''}
                          placeholder="Name of Certificate-1"
                          name="eduLine1"
                          type="text"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.eduLines.eduLine2}
                          placeholder="Name of Certificate-2"
                          name="eduLine2"
                          type="text"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.eduLines.eduLine3}
                          placeholder="Name of Certificate-3"
                          name="eduLine3"
                          type="text"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.experience}
                          placeholder="Experience (year)"
                          name="experience"
                          type="number"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                      <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                          <Form.Group className="mb-3">
                            <Form.Control
                              className="text-secondary"
                              defaultValue={doctor?.phone}
                              placeholder="Phone"
                              name="phone"
                              type="number"
                              onBlur={handleUpdateDoctor}
                            />
                          </Form.Group>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                          <Form.Group className="mb-3">
                            <Form.Select
                              className="text-secondary"
                              defaultValue={doctor?.speciality}
                              name="speciality"
                              onBlur={handleUpdateDoctor}
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
                              <option value="Psychiatrists">
                                Psychiatrists
                              </option>
                              <option value="ENT specialist">
                                ENT specialist
                              </option>
                              <option value="Oocyte and Embryo">
                                Oocyte and Embryo
                              </option>
                            </Form.Select>
                          </Form.Group>
                        </div>

                        <Form.Group className="mb-3">
                          <Form.Control
                            className="text-secondary"
                            defaultValue={doctor?.address}
                            placeholder="Present Address"
                            name="address"
                            type="text"
                            onBlur={handleUpdateDoctor}
                            required
                          />
                        </Form.Group>
                      </div>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.awards.awardFirst}
                          placeholder="Honors and Awards-1"
                          name="awardFirst"
                          type="text"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.awards.awardSecond}
                          placeholder="Honors and Awards-2"
                          name="awardSecond"
                          type="text"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="text-secondary"
                          defaultValue={doctor?.awards.awardThird}
                          placeholder="Honors and Awards-3"
                          name="awardThird"
                          type="text"
                          onBlur={handleUpdateDoctor}
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <hr style={{ color: "gray", border: "3px solid gray" }} />

                  {/* <Form.Group className="mb-3">
                    <Form.Control
                      className="text-secondary"
                      defaultValue={doctor?.title}
                      placeholder="Doctor Title"
                      name="title"
                      type="text"
                      onBlur={handleUpdateDoctor}
                      required
                    />
                  </Form.Group> */}
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      className="text-secondary"
                      defaultValue={doctor?.description}
                      placeholder="Description"
                      name="description"
                      type="text"
                      onBlur={handleUpdateDoctor}
                      required
                    />
                  </Form.Group>
                  <div className="row mb-3">
                    {/* <div className="col-12 col-md-4">
                      <Form.Group>
                        <Form.Select
                          className="text-secondary"
                          defaultValue={doctor?.day}
                          name="day"
                          onBlur={handleUpdateDoctor}
                          required
                        >
                          <option>Working Day</option>
                          <option value="Monday - Friday">
                            Monday - Friday
                          </option>
                          <option value="Sunday - Thrusday">
                            Sunday - Thrusday
                          </option>
                          <option value="Friday - Monday">
                            Friday - Monday
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </div> */}
                  </div>

                  {/* <Card className="p-3 mb-3">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <Form.Group>
                          <Form.Select
                            className="text-secondary"
                            defaultValue={singleDoctorInfo?.skill2}
                            name="skill2"
                            onBlur={handleUpdateDoctor}
                            required
                          >
                            <option>Skill Set</option>
                            <option value="Technique">Technique</option>
                            <option value="Empathy">Empathy</option>
                            <option value="Operation">Operation</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                      <div className="col-12 col-md-6">
                        <Form.Group>
                          <Form.Control
                            className="text-secondary"
                            defaultValue={singleDoctorInfo?.percent2}
                            placeholder="Percentage. Ex - 80"
                            name="percent2"
                            type="number"
                            onBlur={handleUpdateDoctor}
                            required
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </Card> */}
                  {/* <div className="row">
                      <div className="col-12 col-md-6">
                        <Form.Group>
                          <Form.Select
                            className="text-secondary"
                            defaultValue={singleDoctorInfo?.skill3}
                            name="skill3"
                            onBlur={handleUpdateDoctor}
                            required
                          >
                            <option>Skill Set</option>
                            <option value="Technique">Technique</option>
                            <option value="Empathy">Empathy</option>
                            <option value="Operation">Operation</option>
                          </Form.Select>
                        </Form.Group>
                      </div> */}
                  {/* <div className="col-12 col-md-6">
                        <Form.Group>
                          <Form.Control
                            className="text-secondary"
                            defaultValue={singleDoctorInfo?.percent3}
                            placeholder="Percentage. Ex - 80"
                            name="percent3"
                            type="number"
                            onBlur={handleUpdateDoctor}
                            required
                          />
                        </Form.Group>
                  </div>
                      </div> */}

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      className="text-secondary"
                      defaultValue={doctor?.moto}
                      placeholder="Doctor Moto"
                      name="moto"
                      type="text"
                      onBlur={handleUpdateDoctor}
                    />
                  </Form.Group>
                  <Button
                    className="btn btn-primary doctor-update"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    className="btn btn-primary ms-3 doctor-delete"
                    type="reset"
                  >
                    Reset
                  </Button>
                </Form>
              </Card.Body>
              <Alert variant="warning">
                *Please press on each input field to successfully submit the
                form.
              </Alert>
            </Card>

            {/* <Card className="mt-5 card-control2">
                            <Card.Body>
                                <Card.Text className='mb-3'>Account Information</Card.Text>
                                <Form onSubmit={handleSubmit}>
                                    <Button
                                        className='btn btn-primary mx-auto doctor-update'
                                        type='submit'
                                    >Submit</Button>
                                    <Button
                                        className='btn btn-primary mx-auto ms-3 doctor-delete'
                                        type='reset'
                                    >Reset</Button>
                                </Form>
                            </Card.Body>
                        </Card> */}
          </div>
        </div>
      </Container >
    </div >
  );
};

export default DoctorProfile;
