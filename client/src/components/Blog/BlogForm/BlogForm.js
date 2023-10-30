import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { WithContext as ReactTags } from "react-tag-input";
import Swal from "sweetalert2";
import "./BlogForm.css";
import axios from "../../../utils/axiosConfig";
import { adminAtom } from "../../../store/atom";
import { useAtom } from "jotai";
const suggestionsTag = ["eye", "health", "medicien"];
const suggestions = suggestionsTag.map((country) => {
  return {
    id: country,
    text: country,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const BlogForm = () => {
  const [admin] = useAtom(adminAtom);
  const [addBlog, setAddBlog] = useState({
    blogBy: admin.id
  });
  const [image, setImage] = useState(null);
  const date = new Date().toDateString();
  const [tags, setTags] = useState([{ id: "eye", text: "Eye" }]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags].slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const onClearAll = () => {
    setTags([]);
  };

  const onTagUpdate = (i, newTag) => {
    const updatedTags = tags.slice();
    updatedTags.splice(i, 1, newTag);
    setTags(updatedTags);
  };
  console.log(date);

  const handleAddBlog = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBlog = { ...addBlog };
    newBlog[field] = value;
    setAddBlog(newBlog);
  };

  console.log(tags);

  const handleSubmit = async (e) => {
    e.preventDefault();


    const likes = new Array([]);
    const comments = new Array([]);
    const totalVisitor = new Array([]);
    const date = new Date();
    console.log(date);
    const tag = tags;
    console.log(tag, "inside");

    const formData = new FormData();
    for (const key in addBlog) {
      if (Object.hasOwnProperty.call(addBlog, key)) {
        const element = addBlog[key];
        formData.append(`${key}`, element);
      }
    }

    formData.append("image", image);
    formData.append("likes", likes);
    formData.append("comments", comments);
    formData.append("date", date);
    formData.append("totalVisitor", totalVisitor);
    formData.append("tag", JSON.stringify(tag));

    console.log("blog data", formData)


    console.log("add blog st", addBlog);
    const resp = await axios.post("/api/addBlog", addBlog);
    console.log(resp);

    // fetch("http://localhost:7080/api/addBlog", {
    //   method: "POST",
    //   body: addBlog,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire(
    //         "Good job!",
    //         "A Blog has been successfully added!",
    //         "success"
    //       );
    //       const formData = new FormData();
    //       for (const key in addBlog) {
    //         if (Object.hasOwnProperty.call(addBlog, key)) {
    //           const element = "";
    //           formData.append(`${key}`, element);
    //         }
    //       }
    //     }
    //   });
  };

  return (
    <div className="container-contact100">
      <div className="wrap-contact100  container">
        <form className="contact100-form validate-form" onSubmit={handleSubmit}>
          <div class="one">
            <h1 className="re">Write Your Blog</h1>
          </div>
          <Row>
            <Col sm={12} md={6} lg={5}>
              <div className="wrap-input100 validate-input">
                <span className="label-input100">Title</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Write Your Blog Title"
                  name="title"
                  onChange={handleAddBlog}
                  required
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={7}>
              <div className="wrap-input100">
                <span className="label-input100">Description</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Write Your Blog Description"
                  name="description"
                  onChange={handleAddBlog}
                  required
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={5}>
              <div className="wrap-input100">
                <span className="label-input100">Sub Title</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Write Your Blog Sub Title"
                  name="subtitle1"
                  onChange={handleAddBlog}
                  required
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={7}>
              <div className="wrap-input100">
                <span className="label-input100">Sub Title Description</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Enter your Blog Sub Title Description"
                  name="subDescription1"
                  onChange={handleAddBlog}
                  required
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={5}>
              <div className="wrap-input100">
                <span className="label-input100">Sub Title</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Write Your Blog Sub Title"
                  name="subtitle2"
                  onChange={handleAddBlog}
                  required
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={7}>
              <div className="wrap-input100">
                <span className="label-input100">Sub Title Description</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Enter your Blog Sub Title Description"
                  name="subDescription2"
                  onChange={handleAddBlog}
                  required
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={5}>
              <div className="wrap-input100">
                <span className="label-input100">Sub Title</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Write Your Blog Sub Title"
                  name="subtitle3"
                  onChange={handleAddBlog}
                  required
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={7}>
              <div className="wrap-input100">
                <span className="label-input100">Sub Title Description</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Write Your Blog Sub Title Description"
                  name="subDescription3"
                  onChange={handleAddBlog}
                  required
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={5}>
              <div className="wrap-input100 validate-input">
                <span className="label-input100">Sub Title</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Write Your Blog Sub Title"
                  name="subtitle4"
                  onChange={handleAddBlog}
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={7}>
              <div className="wrap-input100 validate-input">
                <span className="label-input100">Sub Title Description</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Write Your Blog Description"
                  name="subDescription4"
                  onChange={handleAddBlog}
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={5}>
              <div className="wrap-input100 validate-input">
                <span className="label-input100">Add Blog Image</span>
                <input
                  className="input100"
                  placeholder="Add Blog Image"
                  accept="image/*"
                  name="photo"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={7}>
              <div className="wrap-input100 input100-select">
                <span className="label-input100">Blog Type</span>
                <div>
                  <select
                    className="selection-2"
                    name="blogType"
                    onChange={handleAddBlog}
                    required
                  >
                    <option>Select</option>
                    <option value="Health Care">Health Care</option>
                    <option value="Eye Care">Eye Care</option>
                    <option value="Medicine">Medicine</option>
                  </select>
                </div>
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className="wrap-input100 input100-select">
                <span className="label-input100">Blog Type</span>
                <div className="ReactTags">
                  <ReactTags
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    delimiters={delimiters}
                    handleTagClick={handleTagClick}
                    onClearAll={onClearAll}
                    onTagUpdate={onTagUpdate}
                    suggestions={suggestions}
                    placeholder="Search ..."
                    minQueryLength={1}
                    maxLength={15}
                    autofocus={false}
                    allowDeleteFromEmptyInput={true}
                    autocomplete={true}
                    readOnly={false}
                    allowUnique={true}
                    allowDragDrop={true}
                    inline={true}
                    allowAdditionFromPaste={true}
                    editable={true}
                    clearAll={true}
                    tags={tags}
                  />
                </div>
                <span className="focus-input100"></span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={5}>
              <div className="container-contact100-form-btn">
                <div className="wrap-contact100-form-btn">
                  <div className="contact100-form-bgbtn"></div>
                  <button type="submit" className="contact100-form-btn">
                    <span>
                      Submit
                      <i
                        className="fa fa-long-arrow-right m-l-7"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
