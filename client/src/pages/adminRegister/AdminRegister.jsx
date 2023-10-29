import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import "./AdminRegisterForm.css";
import axios from "../../utils/axiosConfig"

const AdminRegister = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/authAdmin/admin/signup", data);
            console.log("id",response);
            if (response.status === 200) {
                navigate('/adminLogin');
            }
        } catch (err) {
            console.log("errror is ", err)
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
                            ADMIN PANEL REGISTER
                        </div>
                        <div className="col-lg-12 login-for">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label className="form-control-label">Admin Name</label>
                                    <input type="text" className="form-control" {...register("adminName", { required: true })} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Email Address</label>
                                    <input type="email" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control"  {...register("password", { required: true })} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Role</label>
                                    <div>
                                        <label className="form-control-label">
                                            <input type="radio" className="form-control" {...register("role", { required: true })} value="doctor" /> Doctor
                                        </label>
                                        <label className="form-control-label"   >
                                            <input type="radio" className="form-control" {...register("role", { required: true })} value="admin" /> Admin
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12 loginbttm">

                                    <div className="col-lg-12 d-flex justify-content-between">
                                        <button type='submit' className="pure-button fuller-button blue">ACCEPT</button>
                                        <Link to="/home"> <button className="pure-button fuller-button blue">Go To Home</button></Link>
                                    </div>
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
export default AdminRegister;