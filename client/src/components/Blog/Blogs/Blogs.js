import { Col, Container, Row } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { format } from "timeago.js";
// import { useGetBlogQuery } from "../../../features/blogApi";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Blogs.css";
import axios from "../../../utils/axiosConfig";
import { useEffect, useState } from "react";
const Blogs = () => {
  const [blogCollection,setBlogCollection] = useState([]);
  useEffect(()=>{
    const getAllBlog  = async() =>{
      const res = await axios.get("/api/Blog")
      console.log("Res",res.data);
      setBlogCollection(res.data);
    }
    getAllBlog();
  },[])
  console.log("blogs",blogCollection);
  return (
    <>
      <Header />
      <Container className="mb-5 pb-5">
        <div className="blog-tle pb-5">
          <div class="one">
            <h1 className="re">Our Recent Article</h1>
          </div>
        </div>
        <Row className="blog-my gx-4 gy-5" xs={1} md={2} lg={3} xl={4} >
          {(
            blogCollection?.map((blog) => (
              <Col>
                <div className="card-design h-100">
                  <div className="img-design">
                    <img
                      className="img-fluid"
                      src={blog?.photo}
                      alt=""
                    />
                  </div>
                  <div className="service-card">
                    <Link
                      data-tag={blog?.title}
                      className="title-heading text-decoration-none"
                      to={`/blog/${blog?._id}`}
                    >
                      <h2>{blog?.title}</h2>
                    </Link>
                    <p className="blog-writer">
                      Published By <span>Admin {format(blog?.date)}</span>{" "}
                    </p>
                    <br />
                    <p className="blog-des">{blog?.description}</p>
                    <Link
                      className="custom-btn btn-9 text-decoration-none"
                      to={`/blog/${blog?._id}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
            ))
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Blogs;