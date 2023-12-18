import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { format } from "timeago.js";
import { useGetBlogQuery } from "../../../features/blogApi";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Blogs.css";
import Swal from "sweetalert2";

const AllBlogs = () => {
    const blogCollection = useGetBlogQuery() || {};
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to delete this file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8080/api/blog/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + (localStorage.getItem("user") ?
                            JSON.parse(localStorage.getItem("user")).token :
                            JSON.parse(localStorage.getItem("admin")).token),
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data) {
                            Swal.fire({
                                icon: 'success',
                                title: 'The Doctor has been successfully deleted!',
                                showConfirmButton: false,
                                timer: 2000,
                            });
                            if (Swal) {
                                setTimeout(() => {
                                    window.location.reload();
                                }, 2000);
                            }
                        }
                    });
            }
        });
    };
    return (
        <>
            <Container className="mb-5 pb-5">
                <div className="blog-tle pb-5">
                    <div className="one">
                        <h1 className="re">Our Recent Article</h1>
                    </div>

                </div>
                <Row className="blog-my gx-4 gy-5" xs={1} md={2} lg={3} xl={4} >
                    {blogCollection.isLoading ? (
                        <div className="looder-my">
                            <ScaleLoader color={"#05c9d0"} size={150} />
                        </div>
                    ) : (
                        blogCollection?.data?.map((blog, index) => (
                            <Col key={index}>
                                <div className="card-design h-100">
                                    <div className="img-design">
                                        <img
                                            className="img-fluid"
                                            src={`http://localhost:8080/${blog?.image}`}
                                            alt=""
                                        />
                                        <p data-tag="Total View" className="view-div">
                                            <span className="view">
                                                <MdVisibility /> {blog?.meta?.views?.length}
                                            </span>
                                        </p>
                                        <p data-tag="Total Love" className="love-div">
                                            <span className="love">
                                                <BsFillSuitHeartFill /> {blog?.meta?.likes?.length}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="service-card">
                                        <Link
                                            data-tag={blog?.title}
                                            className="title-heading text-decoration-none"
                                            to={`/blog/${blog?._id}`}
                                        >
                                            <h2>{blog?.title}</h2>
                                        </Link>
                                        <br />
                                        <p className="blog-des">{blog?.description}</p>
                                        <Link
                                            className="custom-btn btn-9 text-decoration-none "
                                            to={`/blog/${blog?._id}`}
                                        >
                                            Read More
                                        </Link>
                                        <div className="flex">
                                            <NavLink to={`/dashboard/blogs/update/${blog?._id}`}>
                                                <Button className="doctor-update">Update</Button>
                                            </NavLink>
                                            <Button
                                                onClick={() => handleDelete(blog?._id)}
                                                className="doctor-delete"
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </>
    );
};

export default AllBlogs;
