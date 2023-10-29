import { Col, Container, Row } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { format } from "timeago.js";
import { useGetBlogQuery } from "../../../features/blogApi";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Blogs.css";

const Blogs = () => {
  const blogCollection = useGetBlogQuery() || {};

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
          {blogCollection.isLoading ? (
            <div className="looder-my">
              <ScaleLoader color={"#7093e5"} size={150} />
            </div>
          ) : (
            blogCollection?.data?.map((blog) => (
              <Col>
                <div className="card-design h-100">
                  <div className="img-design">
                    <img
                      className="img-fluid"
                      src={`data:image/*;base64,${blog?.photo}`}
                      alt=""
                    />
                    <p data-tag="Total View" className="view-div">
                      <span className="view">
                        <MdVisibility /> {blog?.totalVisitor.length}
                      </span>
                    </p>
                    <p data-tag="Total Love" className="love-div">
                      <span className="love">
                        <BsFillSuitHeartFill /> {blog?.likes.length}
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
                    <p className="blog-writer">
                      Published By <span>Admin {format(blog?.date)}</span>{" "}
                    </p>
                    <br />
                    <p className="blog-des">{blog?.description}</p>
                    <Link
                      className="custom-btn btn-9 text-decoration-none "
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
