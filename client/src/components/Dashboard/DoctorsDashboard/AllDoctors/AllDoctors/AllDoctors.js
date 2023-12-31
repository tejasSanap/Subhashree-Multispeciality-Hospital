import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { useGetDoctorsQuery } from '../../../../../features/sigmaApi';
import SingleCardDoctor from '../SingleCardDoctor/SingleCardDoctor';
import './AllDoctors.css';
import axios from '../../../../../utils/axiosConfig';

const AllDoctors = () => {
    const [doctorsCollection, setDoctorsCollection] = useState([]);
    // const doctorsCollection = useGetDoctorsQuery() || {};
    useEffect(() => {
        const fetchDoctors = async () => {
            const res = await axios.get("/api/doctor/getAllDoctors");
            setDoctorsCollection(res);
        }
        console.log(doctorsCollection)
        fetchDoctors();
    }, [])


    if (!doctorsCollection?.data?.length) {
        return <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    }

    return (
        <div style={{ padding: "20px 0" }}>
            <Container>
                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                    {doctorsCollection?.data?.map((doc) => (
                        <SingleCardDoctor
                            key={doc._id}
                            doc={doc}
                        ></SingleCardDoctor>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllDoctors;