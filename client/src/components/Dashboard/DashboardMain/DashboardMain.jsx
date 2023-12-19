import React, { useEffect, useState } from "react";
import { Button, NavDropdown, Offcanvas } from "react-bootstrap";
import { AiOutlineUser, AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrHome } from "react-icons/gr";
import { HiOutlineLockClosed } from "react-icons/hi";
import {
  MdOutlineBloodtype,
  MdOutlineLocalPharmacy,
  MdOutlinePayment,
} from "react-icons/md";
import {
  RiLogoutCircleLine,
  RiNurseLine,
  RiSearchLine,
  RiWechatLine,
} from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import "./DashboardMain.css";
import { useAtom } from "jotai";
import { adminAtom, doctorAtom, roleAtom } from "../../../store/atom";
import axios from "../../../utils/axiosConfig";
import logo from "../../../images/Subhashree-logo.png";

const DashboardMain = () => {
  const navigate = useNavigate();
  const [role] = useAtom(roleAtom);
  const [admin] = useAtom(adminAtom);
  const [doctor, setDoctor] = useAtom(doctorAtom);
  // console.log("refresed", admin.referenceId)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const getDocInfo = async () => {
      const res = await axios.get(`/api/doctor/getDoctor/${admin.referenceId}`);
      console.log("doc info", res.data);

      if (res.status === 200) {
        setDoctor(res.data);
      }
    };
    getDocInfo();
    console.log("referenc id is ", admin.referenceId);
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("adminData");
    localStorage.removeItem("doctor");

    navigate("/adminLogin");
  };

  return (
    <>
      {/* <div className="dashboard_mobile_header">
          <div>lol</div>
          <div>
            <Button
              className="d-block d-md-none dashboard_hamburger_btn"
              variant="primary"
              onClick={handleShow}
            >
              <GiHamburgerMenu />
            </Button>
          </div>

          <div className="dashboard_mobole_logo  d-block d-md-none">
            <Link to="/home">
              <img src="https://i.ibb.co/hRX83Sc/logo.png" alt="" />
            </Link>
          </div>
        </div> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="offcanvas_header">
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="dashboard_left_side_bar">
            <div className="dasboard_user">
              {/* <img src={admin?.photoURL} alt="doctor or user" /> */}
              <div>
                <span>Welcome</span>
                <div>
                  <NavDropdown
                    id="basic-nav-dropdown"
                    className="basic_nav_dropdown_custom"
                    title={admin.name}
                  >
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item
                      as={Link}
                      to=""
                      className="dash_drop_item"
                    >
                      <RiLogoutCircleLine />
                      {/* <span onClick={() => dispatch(logOut())}>Logout</span> */}
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
            <hr />
            <div className="dasboard_leftbar_counter">
              <div>
                <p>Experience</p>
                <span className="dasboard_leftbar_count">20</span>
              </div>
              <div>
                <p>Awards</p>
                <span className="dasboard_leftbar_count">13</span>
              </div>
              <div>
                <p>Clients</p>
                <span className="dasboard_leftbar_count">213</span>
              </div>
            </div>
            <ul className="dashboard_left_nav">
              {role === "admin" && (
                <li className="dashboard_nav_item">
                  <Link to="/dashboard">
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <GrHome />
                      </span>
                      <span>Dashboard</span>
                    </span>
                  </Link>
                </li>
              )}
              <li>
                <Link to="/dashboard/appointments">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <FaRegCalendarAlt />
                    </span>
                    <span>Appointment</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/allDoctors/update">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <RiWechatLine />
                    </span>
                    <span>Edit Details</span>
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/dashboard/blogForm">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <RiWechatLine />
                    </span>
                    <span>Create Blog</span>
                  </span>
                </Link>
              </li>
              {role === "admin" && (
                <li>
                  <Link
                    /* className="btn btn-primary" */
                    data-bs-toggle="collapse"
                    to="#collapseDoctors"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <AiOutlineUser />
                      </span>
                      <span>Doctors</span>
                    </span>
                    <BsChevronDown />
                  </Link>
                  <div className="collapse" id="collapseDoctors">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/allDoctors">
                          <span className="nav_icon">--</span>
                          <span>All Doctors</span>
                        </Link>
                        <Link to="/dashboard/addDoctors">
                          <span className="nav_icon">--</span>
                          <span>Add Doctors</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              {role === "admin" && (
                <li>
                  <Link
                    /* className="btn btn-primary" */
                    data-bs-toggle="collapse"
                    to="#collapseNurses"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <RiNurseLine />
                      </span>
                      <span>Nurses</span>
                    </span>
                    <BsChevronDown />
                  </Link>
                </li>
              )}

              {role === "doctor" && (
                <li>
                  <Link
                    /* className="btn btn-primary" */
                    data-bs-toggle="collapse"
                    to="#collapsePatients"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <AiOutlineUsergroupDelete />
                      </span>

                      <span>Patients</span>
                    </span>
                    <BsChevronDown />
                  </Link>

                  <div className="collapse" id="collapsePatients">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/patientsInfo">
                          <span className="nav_icon">--</span>
                          <span>All Patients</span>
                        </Link>
                        <Link to="/dashboard/appointments">
                          <span className="nav_icon">--</span>
                          <span>Add Patient</span>
                        </Link>
                        {/* <Link to="/dashboard/appointedpatient">
                        <span className="nav_icon">--</span>
                        <span>Appointed Patients</span>
                      </Link> */}
                        <Link to="/dashboard/patient/invoice">
                          <span className="nav_icon">--</span>
                          <span>Invoice</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              {(role === "admin" || role === "recip") && (
                <li>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapsePayments"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="dashboard_nav_icon">
                      <span className="nav_icon">
                        <MdOutlinePayment />
                      </span>
                      <span>Access</span>
                    </span>
                    <BsChevronDown />
                  </Link>
                  <div className="collapse" id="collapsePayments">
                    <ul className="dashboard_sub_menu">
                      <li>
                        <Link to="/dashboard/patientAccess">
                          <span className="nav_icon">--</span>
                          <span>Patient Access</span>
                        </Link>
                        {/* <Link to="/dashboard">
                        <span className="nav_icon">--</span>
                        <span>Add Payments</span>
                      </Link>
                      <Link to="/dashboard">
                        <span className="nav_icon">--</span>
                        <span>Invoie</span>
                      </Link> */}
                      </li>
                    </ul>
                  </div>
                </li>
              )}
              {/* <li>
              <Link
                data-bs-toggle="collapse"
                to="#collapseDepartments"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <ImStack />
                  </span>
                  <span>Departments</span>
                </span>
                <BsChevronDown />
              </Link>

              <div className="collapse" id="collapseDepartments">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Add Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>All Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard/">
                      <span className="nav_icon">--</span>
                      <span>Neurology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>ENT</span>
                    </Link>

                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Cardiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Audiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Psychology</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="dashboardHeader container-fluid">
        <div className="logo_area">
          <Link to="/home">
            <img src={logo} style={{ height: "70px" }} />
          </Link>
          <text style={{ marginLeft: "10px", fontWeight: "600" }}>
            Subhashree Hospital
          </text>
        </div>
      </div>

      {/* left side bar */}
      <div className="dashboard_main">
        <div className="dashboard_left_side_bar d-none d-md-block">
          <div className="dasboard_user">
            {/* <img src={doctor?.photo} alt="doctor or user" /> */}
            <div>
              <span style={{ fontSize: "12px" }}>Welcome,</span>
              <div>
                <NavDropdown
                  style={{ fontWeight: "500", color: "#24b9be" }}
                  title={admin.name}
                  id="basic-nav-dropdown"
                  className="basic_nav_dropdown_custom"
                >
                  <NavDropdown.Item
                    style={{ fontWeight: "500", color: "#d14836" }}
                    className="dash_drop_item"
                    onClick={handleLogout}
                  >
                    <RiLogoutCircleLine />
                    <span>Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </div>
          <hr />
          <ul className="dashboard_left_nav">
            {role === "admin" && (
              <li className="dashboard_nav_item">
                <Link to="/dashboard">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <GrHome />
                    </span>
                    <span>Dashboard</span>
                  </span>
                </Link>
              </li>
            )}

            <li>
              <Link to="/dashboard/appointments">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <FaRegCalendarAlt />
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>
                    Appointments
                  </span>
                </span>
              </Link>
            </li>

            {role === "doctor" && (
              <li>
                <Link to="/dashboard/update">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <FaRegCalendarAlt />
                    </span>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>
                      Edit Profile
                    </span>
                  </span>
                </Link>
              </li>
            )}

            {role === "admin" && (
              <li>
                <Link to="/dashboard/hospitalDetails">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <FaRegCalendarAlt />
                    </span>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>
                      Edit Hospital
                    </span>
                  </span>
                </Link>
              </li>
            )}

            <li>
              <Link to="/dashboard/blogForm">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <RiWechatLine />
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>
                    Create Blog
                  </span>
                </span>
              </Link>
            </li>
            {role === "admin" && (
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="/dashboard/allDoctors"
                  role="button"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <AiOutlineUser />
                    </span>
                    <span>Doctors</span>
                  </span>
                </Link>
                <div className="collapse" id="collapseDoctors">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/dashboard/allDoctors">
                        <span className="nav_icon">--</span>
                        <span>All Doctors</span>
                      </Link>
                      <Link to="/dashboard/addDoctors">
                        <span className="nav_icon">--</span>
                        <span>Add Doctors</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {/* <li>
              <Link
                data-bs-toggle="collapse"
                to="#collapseDepartments"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <ImStack />
                  </span>
                  <span>Departments</span>
                </span>
                <BsChevronDown />
              </Link>

              <div className="collapse" id="collapseDepartments">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Add Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>All Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard/">
                      <span className="nav_icon">--</span>
                      <span>Neurology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>ENT</span>
                    </Link>

                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Cardiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Audiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Psychology</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
        <div className="dashboard_content_area">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
