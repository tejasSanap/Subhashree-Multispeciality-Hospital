import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { removeUser } from "../../../features/authSlice";
import "./Header.css";
import { userAtom } from "../../../store/atom";
import { useAtom } from "jotai";
import { isLoginAtom } from "../../../store/atom";

const Header = () => {
  const [show, setShow] = useState(false);
  // const dispatch = useDispatch();
  const user = useAtom(userAtom);
  console.log("user atom", user[0].email);
  // const user = {};
  const admin = {};
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const navigate = useNavigate();
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoginAtom);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  const toggleSubmenu1 = () => {
    setMenuSubMenu1(isMenuSubMenu1 === false ? true : false);
  };
  const handleLogout = () => {
    // Clear local storage values
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("adminData");
    localStorage.removeItem("doctor");
    localStorage.removeItem("user");
    // localStorage.removeItem('isLogin');
    setIsLoggedIn(false);
    console.log("Removed local storage atoms");
    window.location.reload();
  };
  let boxClassSubMenu = ["sub__menus"];
  let boxClassSubMenu1 = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  if (isMenuSubMenu1) {
    boxClassSubMenu1.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  // const user = useSelector((state) => state.auth.auth);
  console.log(user, "user");
  // const admin = useSelector((state) => state.admin.admin);
  const handleAppointmentClick = () => {
    console.log("Cleck", isLoggedIn);
    if (isLoggedIn === false) {
      navigate("/login");
    }
  };
  return (
    <header className="header__middle">
      <div className="container-fluid">
        <div className="row d-flex">
          {/* Add Logo  */}
          <div className="col-8 col-md-2">
            <div className="header__middle__logo">
              <Link className="no-underline" activeclassname="is-active" to="/">
                <div className="Header-icon">
                  <img src="Subhashree-logo.png" className="w-20" alt="logo" />
                  <div className="title">
                    <div className="title-upper">Subhashree</div>
                    <div className="title-below">Hospital</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-4 col-md-10">
            <div className="header__middle__menus">
              <nav className="main-nav">
                {/* Responsive Menu Button*/}
                {isResponsiveclose === true ? (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      <GrClose />
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      <GiHamburgerMenu />
                    </span>
                  </>
                )}

                <ul className={boxClass.join(" ")}>
                  <li className="menu-item">
                    <Link
                      exact
                      activeClassName="is-active"
                      onClick={toggleClass}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="menu-item ">
                    <Link
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="/doctor"
                    >
                      Doctors
                    </Link>
                  </li>
                  <li
                    onClick={toggleSubmenu1}
                    className="menu-item sub__menus__arrows"
                  >
                    <Link to="#">
                      Specializations🢓
                      {/* <FiChevronDown /> */}
                    </Link>
                    <ul className={boxClassSubMenu1.join(" ")}>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/specialization/oncologist"
                        >
                          Oncologist
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/specialization/ent-specialist"
                        >
                          ENT Specialist
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/specialization/neurologist"
                        >
                          Cardiologist
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/specialization/audiologist"
                        >
                          Audiologist
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/specialization/psychiatrists`}
                        >
                          Psychiatrists
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item ">
                    <Link
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li
                    onClick={toggleSubmenu}
                    className="menu-item sub__menus__arrows"
                  >
                    <Link to="#">
                      Pages🢓
                      {/* <FiChevronDown /> */}
                    </Link>
                    <ul className={boxClassSubMenu.join(" ")}>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/about"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/service"
                        >
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/team"
                        >
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/faq"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="/review"
                        >
                          Give Us Feedback
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {user[0]?.email ? (
                    <li className="menu-item" onClick={handleLogout}>
                      <a> Logout </a>
                    </li>
                  ) : (
                    <li className="menu-item">
                      <Link
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                  )}

                  {isLoggedIn ? (
                    <li className="menu-item">
                      <Link to="/myappointments" activeClassName="is-active">
                        My Appointments
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  {isLoggedIn ? (
                    <Link
                      to="/appointment"
                      className="header-btn text-decoration-none btn-hover"
                    >
                      Appointment <i className="fas fa-plus header-icon"></i>
                    </Link>
                  ) : (
                    <Link
                      style={{ fontWeight: "500", margin: "8px 0 0 4px" }}
                      to="/login"
                      className="header-btn text-decoration-none btn-hover"
                    >
                      Appointment <i className="fas fa-plus header-icon"></i>
                    </Link>
                  )}

                  {(admin.role === "nurse" ||
                    admin.role === "admin" ||
                    admin.role === "doctor" ||
                    admin.role === "recip" ||
                    admin.role === "pharma") && (
                    <Link
                      to="/dashboard"
                      className="header-btn text-decoration-none btn-hover"
                    >
                      Deshboard <i className="fas fa-plus header-icon"></i>
                    </Link>
                  )}
                </ul>
                {/* <span onClick={toggleShow} className="icon">
                  <GiHamburgerMenu />
                </span> */}
              </nav>

              {/* <Offcanvas placement={"end"} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="users-info text-center">
                    <img src={user?.photoURL} alt="" />
                    <h3>{user?.displayName}</h3>
                  </div>
                </Offcanvas.Body>
              </Offcanvas> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
