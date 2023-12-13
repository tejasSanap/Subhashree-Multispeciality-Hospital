import axios from "../../../utils/axiosConfig";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { GrDislike, GrLike } from "react-icons/gr";
// import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { format } from "timeago.js";
// import { useGetBlogQuery } from "../../../features/blogApi";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Share/Header/Header";
import Comment from "../Comment/Comment";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const user = {}
  const blogInfo = {}
  const [oneBlog,setOneBlog] = useState([]);
  const [loginUser, setLoginUser] = useState(null);
  const [singleBlog, setSingleBlog] = useState([]);
  const [liked, setLiked] = useState([]);
  const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(Number);

  // const [isLike, setIsLike] = useState([]);
  // const blogInfo = useGetBlogQuery();
  // const user = useSelector((state) => state.auth.auth);


  useEffect(()=>{
    const fetchSingleBlog = async()=>{
      const res = await axios.get(`/api/Blog/${id}`);
      console.log("Res blog",res.data)
      setOneBlog(res.data);
    }
    fetchSingleBlog();
  },[])  


  console.log(user, "user comment");
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:7050/users/${user?.email}`)
  //     .then((res) => setLoginUser(res.data));
  // }, [user?.email]);

  useEffect(() => {
    const foundBlog = blogInfo?.data?.find((doctors) => doctors?._id === id);
    setSingleBlog(foundBlog);
    setNumber(singleBlog?.likes?.length);
    if (foundBlog?.likes?.length === 0) {
      setLiked(false);
    } else {
      foundBlog?.likes?.includes(loginUser?._id)
        ? setLiked(true)
        : setLiked(false);
    }
  }, [blogInfo?.data, id, loginUser?._id, singleBlog]);

  useEffect(() => {
    const userVisit = {
      visit: loginUser?._id,
    };
    console.log(loginUser?._id, singleBlog?._id);
    if (
      singleBlog?.totalVisitor?.length === 0 &&
      singleBlog?._id &&
      loginUser?._id
    ) {
      const getvisitor = async () => {
        try {
          const res = await axios.put(
            `http://localhost:7050/totalVisitor/${singleBlog?._id}`,
            userVisit
          );
          console.log(res, "res", "2nd");
        } catch (error) {
          console.log(error);
        }
      };
      getvisitor();
    } else {
      const findId = singleBlog?.totalVisitor?.includes(loginUser?._id);
      console.log(findId, "findId");

      if (!findId && loginUser?._id) {
        const getvisitor = async () => {
          try {
            const res = await axios.put(
              `http://localhost:7050/totalVisitor/${singleBlog?._id}`,
              userVisit
            );
            console.log(res, "res", "2nd");
          } catch (error) {
            console.log(error);
          }
        };
        getvisitor();
      }
    }
  }, [singleBlog?._id, loginUser?._id, singleBlog]);
  const handleUpdateLike = async (id) => {
    console.log("doclike");
    const docLike = {
      likes: loginUser?._id,
    };

    const res = await axios.put(
      `http://localhost:7050/updateBloglike/${id}`,
      docLike
    );
    if (res.data) {
      console.log(" if doclike");
      setLiked(true);
      setNumber(number + 1);
    }
  };
  const handleUpdateUnLike = async (id) => {
    console.log("docUnlike");
    const docUnLike = {
      likes: loginUser?._id,
    };
    const res = await axios.put(
      `http://localhost:7050/updateBlogUnlike/${id}`,
      docUnLike
    );
    if (res.data) {
      console.log(res.data.value);
      setNumber(number - 1);
      singleBlog._id === res.data.value?._id ? setLiked(false) : setLiked(true);
      console.log(liked, "handleUpdateUnLike");
    }
  };
  const handleSearch = async () => {
    const newData = await blogInfo?.data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setNewData(newData);
  };
  console.log(newData);
  // const handleHelp = (e) => {
  //     e.preventDefault();
  //     setSearch(e.target.value)
  //     console.log(e.target.value);
  //     if (search.length !== 0 && search !== "" && search !== " ") {
  //         const find = blogInfo?.data.filter((item) => {
  //             return item?.title?.toLowerCase()?.includes(search?.toLowerCase())
  //         })
  //         setNewHelp(find)
  //     }

  //     console.log(newData, "find");

  // }

  // console.log(newData);
  // console.log(newHelp, "search ===");

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 2000,

    autoplaySpeed: 2000,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  // const dddd = blogInfo?.data.sort((a, b) => {
  //     return a.likes.length - b.likes.length
  // })
  console.log(blogInfo.data, "ddddd");
  return (
    <>
      <Header />
      <div
        style={{ background: `url(https://i.ibb.co/9nmC6s9/ki-14-1.jpg)` }}
        className="backcrumb-my "
      >
        <nav aria-label="breadcrumb">
          <h3>{oneBlog?.title}</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              {oneBlog?.blogType}
            </li>
          </ol>
        </nav>
      </div>
      <Container>
        <Row>
          <Col md={8}>
            <div className="hover-effect">
              <div className="Img-blog my-5">
                <img
                  className="img-fluid"
                  src={oneBlog?.photo}
                  style={{height: '400px',width:'auto'}}
                  alt=""
                />
              </div>
              <div className="single-blog-info">
                <span className="btn-blog mb-3">{oneBlog?.blogType}</span>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="like-icon ">
                    {" "}
                    <FaHeart /> {number} people likes this{" "}
                  </span>
                  {!liked ? (
                    <span data-tag="Like" className="liked">
                      {" "}
                      <GrLike
                        className="svg"
                        onClick={() => {
                          handleUpdateLike(oneBlog?._id);
                        }}
                      />{" "}
                    </span>
                  ) : (
                    <span data-tag="UnLike" className="liked">
                      <GrDislike
                        className="svg"
                        onClick={() => {
                          handleUpdateUnLike(oneBlog?._id);
                        }}
                      />
                    </span>
                  )}
                </div>

                <br />
                <h2 className="show-unshow">{oneBlog?.title}</h2>
                <p className="admin-info">
                  <span>{format(oneBlog?.date)}</span>
                  <span style={{ color: "#f68685" }}>by Admin</span>
                </p>
                <p>{oneBlog?.description} </p>
                <h4>{oneBlog?.subtitle1}</h4>
                <p>{oneBlog?.subDescription1}</p>
                <h4>{oneBlog?.subtitle2}</h4>
                <p>{oneBlog?.subDescription2}</p>
                <h4>{oneBlog?.subtitle3}</h4>
                <p>{oneBlog?.subDescription3}</p>
                <h4>{oneBlog?.subtitle4}</h4>
                <p>{oneBlog?.subDescription4}</p>
              </div>
            </div>
          </Col>

          
          <Col lg={4} className="my-5">
            <div className="search">
              {" "}
              <i className="fa fa-search"></i>{" "}
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Have a question? Ask Now"
              />{" "}
              <button
                onClick={() => handleSearch()}
                className="btn btn-primary"
              >
                Search
              </button>{" "}
            </div>
            {search.length > 0 &&
              newData.map((item, i) => (
                <div className="help" key={i}>
                  <Link to={`/Blog/${item?._id}`}>
                    <h3>{item?.title}</h3>
                  </Link>
                </div>
              ))}
            <Slider {...settings}>
              {blogInfo?.data?.map((item) => (
                <Link to={`/Blog/${item?._id}`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="info-slider">
                      <h5>{item?.title}</h5>
                      <p>{item?.description}</p>
                    </div>
                    <div className="info-img ">
                      <img
                        className="img-fluid"
                        src={item?.photo}
                        alt=""
                        style={{ width: '100px', height: '100px' }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </Col>
        </Row>
        <Comment blogId={singleBlog} loginUser={loginUser} />
      </Container>
      <Footer />
    </>
  );
};

export default SingleBlog;
