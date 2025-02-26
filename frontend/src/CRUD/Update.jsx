import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useParams, useNavigate} from "react-router-dom"


useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/oneItem/" + id)
        .then((res) => setItem(res.data))
        .catch((err) => console.log(err));
    
    
    const handleChange = (e) => {
      setItem({ ...item, [e.target.name]: e.target.value });
    };
    const handlePhoto = (e) => {
      setItem({ ...item, photo: e.target.files[0] });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      Object.entries(item).forEach(([key, value]) => {
        formData.append(key, value);
      });
      await axios
        .patch(`http://localhost:5000/addItem/${id}`, formData)
        .then((res) => console.log(res))
        .catch((err) => console.log("Data not added.", err));
    };

return (
    <Container>
      <h1>ReadOne</h1>
      <Row>
        <Col xs={12} md={6}>
          <img
            src={`http://localhost:5000/images/${item.photo}`}
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <Button variant="danger" onClick={() => handlDelete(item._id)}>
            Delete
          </Button>
          <Button variant="warning">Update</Button>
        </Col>
      </Row>
    </Container>
  );
export default Update
