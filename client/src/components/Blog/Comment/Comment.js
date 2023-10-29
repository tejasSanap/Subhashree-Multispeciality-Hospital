import axios from "axios";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { RiCodeFill, RiCodeSSlashFill } from "react-icons/ri";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { format } from "timeago.js";
import "./Comment.css";

const Comment = ({ blogId, loginUser }) => {
  console.log(blogId);
  const { register, handleSubmit } = useForm();
  const [rate, setRate] = useState(0);
  const [commentPost, setCommentPost] = useState([]);

  console.log(commentPost, "commentPost");
  const onSubmit = async (data) => {
    data["rating"] = rate;
    data["id"] = loginUser?._id;
    data["displayName"] = loginUser?.displayName;
    data["email"] = loginUser?.email;
    data["img"] = loginUser?.photoURL;
    data["time"] = new Date();
    console.log(data, "commmmmmm");
    try {
      const res = await axios.put(
        `http://localhost:7050/commentPut/${blogId?._id}`,
        data
      );
      console.log(data);
      console.log(res);
      console.log(res?.status);
      if (res?.status === 200) {
        setCommentPost([...commentPost, data]);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Comment has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Your Comment has been not saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  // useEffect(() => {
  //     setCommentPost(blogId?.comments)
  //     const getComment = async () => {
  //         const find = blogId?.comments?.find((i) => i?.id === loginUser?._id)
  //         console.log(find);
  //         if (find) {

  //         } else {

  //         }

  //     }
  //     getComment()

  // }, [loginUser?._id, blogId?.comments])

  console.log(commentPost, "commentPost");

  return (
    <>
      <Row className="mb-5">
        <Col lg={8}>
          <div className="commentForm">
            <h3>Write a Comment...</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                {...register("comment", { required: true })}
              ></textarea>
              <p>Give Rating</p>
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating={rate}
                className="rating-color"
                onChange={(rate) => setRate(rate)}
              />
              <br />

              <button
                className="custom-btn btn-9"
                type="submit"
                value="Comment"
              >
                Comment{" "}
              </button>
            </form>
          </div>
        </Col>

        <Col lg={8}>
          {commentPost?.length !== 0 && (
            <>
              <h1 className="mb-4">What People Say About This Article </h1>
            </>
          )}
          {commentPost?.map((post, i) => {
            return (
              <div key={i} className="comment-post">
                <div className="comment-img">
                  <img src={post?.img} alt="" />
                </div>
                <div className="c-post w-100">
                  <div className="d-flex justify-content-between">
                    <span>
                      <span style={{ fontSize: "20px", color: "#7093e5" }}>
                        {" "}
                        Comment By
                      </span>{" "}
                      <br />
                      <span style={{}}>{post?.displayName} </span>
                      <span style={{ color: "#f68685" }}>
                        {format(post?.time)}
                      </span>
                    </span>
                    <span style={{ fontSize: "20px" }}>
                      Rating{" "}
                      <Rating
                        className="rating-color"
                        emptySymbol="fa fa-star-o"
                        fullSymbol="fa fa-star "
                        fractions={2}
                        readonly
                        initialRating={post?.rating}
                      />{" "}
                    </span>
                  </div>
                  <div className="commment-text">
                    <RiCodeFill /> {post?.comment} <RiCodeSSlashFill />
                  </div>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default Comment;
