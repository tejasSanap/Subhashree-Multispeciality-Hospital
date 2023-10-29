import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../utils/axiosConfig"
import "./adminLoginForm.css";
import { useAtom } from 'jotai';
import { adminAtom, roleAtom, tokkenAtom } from '../../store/atom';


const AdminLogin = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [token, setToken] = useAtom(tokkenAtom);
    const [role, setRole] = useAtom(roleAtom);
    const [admin, setAdmin] = useAtom(adminAtom);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/authAdmin/admin/login", data);
            if (response.status === 200) {
                console.log(response.data);
                console.log("parsed",);

                setToken(response.data.accessToken);
                setAdmin(response.data.userData);
                setRole(response.data.userRole);

                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('role', response.data.userRole);
                // localStorage.setItem('adminData parsed', JSON.parse(response.data.userData));
                localStorage.setItem('adminData', JSON.stringify(response.data.userData));

                if (response.data.userRole === 'doctor' && response.data.userData.id === response.data.userData.referenceId) {
                    console.log("doc needs to be created")
                    navigate('/addDocDetails')
                }
                else {
                    navigate('/dashboard')
                }
            }
        } catch (err) {
            // console.log("errror is ", err)
        }
    }

    return (
        <div className='admin-login-section'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">
                            ADMIN PANEL LOGIN
                        </div>
                        <div className="col-lg-12 login-for">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label className="form-control-label">Email Address</label>
                                    <input type="email" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control"  {...register("password", { required: true })} />
                                </div>
                                <div className="col-lg-12 loginbttm">

                                    <div className="col-lg-12 d-flex justify-content-between">
                                        <button type='submit' className="pure-button fuller-button blue">ACCEPT</button>
                                        <Link to="/home"> <button className="pure-button fuller-button blue">Go To Home</button></Link>
                                    </div>
                                    <div className='lol'>{token}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </div>
    );
};
export default AdminLogin;