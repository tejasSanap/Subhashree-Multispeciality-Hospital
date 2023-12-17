import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import "./SingleCardDoctor.css";

const SingleCardDoctor = ({ doc }) => {
  const { _id, photo, name, title, address, linkedin, facebook, twitter } = doc;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7080/api/doctor/deleteDoctor/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                icon: "success",
                title: "The Doctor has been successfully deleted!",
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
    <div>
      <Col>
        <Card className="text-center shadow p-3">
          <Card.Img
            className="doctor-image"
            variant="top"
            src={photo}
          />
          <Card.Body>
            <NavLink
              to={`/singleDoctor/${_id}`}
              style={{ textDecoration: "none" }}
            >
              <Card.Title>{name}</Card.Title>
            </NavLink>
            <small className="text-secondary">{title}</small>
            <Card.Text>{address}</Card.Text>
            <div className="d-flex justify-content-evenly align-items-start mt-3">
              <NavLink to={`/dashboard/allDoctors/update/${_id}`}>
                <Button className="doctor-update">Update</Button>
              </NavLink>
              <Button
                onClick={() => handleDelete(_id)}
                className="doctor-delete"
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleCardDoctor;
