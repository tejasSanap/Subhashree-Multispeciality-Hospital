import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Share/Header/Header';
import './Login.css';
import axios from '../../utils/axiosConfig';
import { useAtom } from 'jotai';
import { roleAtom, tokkenAtom, userAtom,isLoginAtom } from '../../store/atom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [classAdd, setClassAdd] = useState('');
    const [role, setRole] = useAtom(roleAtom);
    const [token, setToken] = useAtom(tokkenAtom);
    const [user, setUser] = useAtom(userAtom);
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoginAtom);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });

    const {
        register: register2,
        handleSubmit: handleSubmit2,
        formState: { errors: errors2 },
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = async (data) => {
        // Handle registration logic (e.g., send data to your server)   
        const res = await axios.post("/api/auth/signup", {
            username: data.displayName,
            email: data.email,
            password: data.password
        })
        if (res.status === 200) {
            alert("account created now please login");
        }
        console.log("reg clicked", data)
        console.log("reg done", res)
    };

    const onSubmit2 = async (data) => {
        // Handle login logic (e.g., send data to your server)
        const res = await axios.post("/api/auth/login", {
            email: data.email,
            password: data.password
        })
        if (res.status === 200) {
            alert("loged in");
            setToken(res.data.accesstoken);
            setUser(res.data);
            localStorage.setItem('token', res.data.accesstoken);
            localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.setItem('isLoggedIn',true)
            setIsLoggedIn(true)
            navigate("/myAppointments")
        }
        console.log("resss", user);
    };

    return (
        <>
            <Header />
            <div className="login-section">
                <Container>
                    {isLoggedIn?(<p>You are already logged in</p>) : (
                    <div className={`con ${classAdd}`} id="container">
                        <div className="form-container sign-up-container">
                            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                                <h1>Create Account</h1>
                                <div className="social-container">
                                    {/* <span className="social"><FaFacebookF /></span> */}
                                    {/* <span className="social" onClick={() => signInWithGoogle(location, navigate)}><FaGoogle /></span> */}
                                    {/* <span className="social"><FaTwitter /></span> */}
                                </div>
                                <span>or use your email for registration</span>
                                <input {...register('displayName', { required: true })} type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                                <input type="password" placeholder="Password" {...register('password')} />
                                {errors.password && <span className='text-danger pt-2 d-inline-block'>Please add 8 digits. </span>}
                                <button style={{borderRadius: "4px"}} type="submit">Sign Up</button>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form onSubmit={handleSubmit2(onSubmit2)} className="login-form">
                                <h1>Sign in</h1>
                                <div className="social-container">
                                    {/* <span className="social"><FaFacebookF /></span> */}
                                    {/* <span className="social" onClick={() => signInWithGoogle(location, navigate)}><FaGoogle /></span> */}
                                    {/* <span className="social"><FaTwitter /></span> */}
                                </div>
                                <span>or use your account</span>
                                <input type="email" placeholder="Email" {...register2('email', { required: true, pattern: /^\S+@\S+$/i })} />
                                {errors2.email && errors2.email.type === 'required' && <span className='text-danger pt-2 d-inline-block'>Email Address is required</span>}
                                {errors2.email && errors2.email.type === 'pattern' && <span className='text-danger pt-2 d-inline-block'>Please provide a valid Email</span>}
                                <input type="password" placeholder="Password" {...register2('password')} />
                                {errors2.password && 'Password is required'}
                                {errors2.password && errors2.password.type === 'min' && <span className='text-danger pt-2 d-inline-block'>Please add 8 digits. </span>}
                                <span className='py-2'>Forgot your password?</span>
                                <button style={{borderRadius: "4px"}} type="submit">Sign In</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To stay connected with us, please login with your personal info</p>
                                    <button onClick={() => setClassAdd('')} className="ghost" id="signIn">Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Please Sign Up</h1>
                                    <p>Enter your personal details and start your journey with us</p>
                                    <button className="ghost" id="signUp" onClick={() => setClassAdd('right-panel-active')}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Login;
