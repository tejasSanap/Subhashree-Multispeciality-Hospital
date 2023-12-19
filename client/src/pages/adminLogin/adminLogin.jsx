import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axiosConfig";
import "./adminLogin.css";
import { useAtom } from "jotai";
import { adminAtom, roleAtom, tokkenAtom } from "../../store/atom";
import { Container } from "react-bootstrap";

const AdminLogin = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [token, setToken] = useAtom(tokkenAtom);
  const [role, setRole] = useAtom(roleAtom);
  const [admin, setAdmin] = useAtom(adminAtom);
  const [classAdd, setClassAdd] = useState("");
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/authAdmin/admin/login", data);
      if (response.status === 200) {
        console.log(response.data);
        console.log("parsed");

        setToken(response.data.accessToken);
        setAdmin(response.data.userData);
        setRole(response.data.userRole);

        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("role", response.data.userRole);
        // localStorage.setItem('adminData parsed', JSON.parse(response.data.userData));
        localStorage.setItem(
          "adminData",
          JSON.stringify(response.data.userData)
        );

        if (
          response.data.userRole === "doctor" &&
          response.data.userData.id === response.data.userData.referenceId
        ) {
          console.log("doc needs to be created");
          navigate("/addDocDetails");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      // console.log("errror is ", err)
      alert("Invalid password");
    }
  };

  return (
    <>
      <div className="login-section" style={{ marginTop: "10vh" }}>
        <Container>
          <div className={`con ${classAdd}`} id="container">
            <div className="form-container sign-up-container">
              <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <h1>Admin Portal</h1>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <button
                  style={{ borderRadius: "4px" }}
                  type="submit"
                  id="signIn"
                >
                  Sign In
                </button>
              </form>
            </div>

            <div className="form-container sign-in-container">
              <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                  <h2>ADMIN</h2>
                  <input
                    style={{
                      borderRadius: "4px",
                      width: "500px",
                      fontSize: "14px",
                    }}
                    type="email"
                    placeholder="Email"
                    className="pt-2 d-inline-block"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <input
                    style={{
                      borderRadius: "4px",
                      width: "500px",
                      fontSize: "14px",
                    }}
                    type="password"
                    placeholder="Password"
                    className="pt-2 d-inline-block"
                    {...register("password", { required: true })}
                  />
                  <button
                    style={{ borderColor: "#03989e" }}
                    type="submit"
                    className="ghost"
                    id="signIn"
                  >
                    ACCEPT
                  </button>
                  <button
                    style={{ borderColor: "#d14836" }}
                    type="submit"
                    className="ghost"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/"
                    >
                      Go To Home
                    </Link>
                  </button>
                </form>
              </div>
            </div>

            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back Admin!</h1>
                  <p>
                    To stay connected with us, please login with your personal
                    info
                  </p>
                  <button
                    onClick={() => handleSubmit()}
                    className="ghost"
                    id="signIn"
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Login to Dashboard</h1>
                  {/* <button className="ghost" id="signUp" onClick={() => handleSubmit()}>Sign Up</button> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default AdminLogin;
