import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiHappyHeartEyes } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { FaRegAngry } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";

import Footer from "../../Home/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./review.css";
import { userAtom } from "../../../store/atom";
import { useAtom } from "jotai";
import axios from "../../../utils/axiosConfig";

const Review = () => {
  // const user = useSelector((state) => state.auth.auth);
  const [user, setUser] = useAtom(userAtom);
  console.log("333", user);
  const [rating, setRate] = useState(0);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm(); // initialize the hook

  const onSubmit = (data) => {
    data["rating"] = rating;
    data["email"] = user?.email || 'null';
    data["displayName"] = data?.name;
    data["photoURL"] = user?.photoURL
    data["description"]= data.describe;
    console.log("data", data);
    axios.post("/api/reviewAdd", data).then((data) => {
      console.log(data, "info");
      if (data.status === 200) {
        reset();
        setRate(0);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Review has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Your Review has been not saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <Header />
      <div className="review-section ">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}></Col>
            <Col lg={6} className="">
              <div className="review-form">
                <div class="one">
                  <h1 className="re">Give Us Feedback</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Rating
                    className="reviewRating"
                    stop={5}
                    fractions={5}
                    initialRating={rating}
                    onChange={(rate) => setRate(rate)}
                    emptySymbol={[
                      "fa fa-star-o fa-2x low",
                      "fa fa-star-o fa-2x low",
                      "fa fa-star-o fa-2x medium",
                      "fa fa-star-o fa-2x medium",
                      "fa fa-star-o fa-2x high",
                    ]}
                    fullSymbol={[
                      "fa fa-star fa-2x low",
                      "fa fa-star fa-2x low",
                      "fa fa-star fa-2x medium",
                      "fa fa-star fa-2x medium",
                      "fa fa-star fa-2x high",
                    ]}
                  />
                  {rating <= 2 && rating > 0 ? (
                    <p>
                      I hate This <FaRegAngry />
                    </p>
                  ) : rating <= 4 ? (
                    <p>
                      It is Awesome. <BiHappyHeartEyes />
                    </p>
                  ) : (
                    <p>
                      I just love it. <BsHeartFill />
                    </p>
                  )}
                  <textarea
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                  ></textarea>
                  <textarea
                    placeholder="Describe your experience..."
                    {...register("describe", { required: true })}
                  ></textarea>
                  {errors.describe?.type === "required" && (
                    <p className="error-des">Description is required</p>
                  )}
                  <button className="bttn" type="submit">
                    Post
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Review;
