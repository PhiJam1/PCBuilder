import React, { useState } from 'react';
import "./../pages/OrderStatus.css";
import { useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import { Badge } from "react-bootstrap";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

export default function FinalOrderStatus() {
    const { buildNum } = useParams();
    const [submitted, setSubmitted] = useState(false); // this should be a call to backend based on buildNum
    const [invalidForm, setInvalidForm] = useState(false);

    function updateForm() {
        let email = document.getElementById("email-final").value;
        let phone = document.getElementById("phone-final").value;

        if (email === "" || phone === "") {
            setInvalidForm(true);
            return;
        }
        // send both to backend to be saved with this build number
        setSubmitted(!submitted);
        setInvalidForm(false);
    }
    
    let navigate = useNavigate(); 
    function routeChange() { 
        let path = "/Design_Studio/" + buildNum + "/"; 
        navigate(path);
    }
    

    return (
        <Row style={{margin: '0px'}}>
            <Col>
                <div className="build-components">
                    <h1>Current Build Info</h1>
                    <h2><Badge bg="primary" size="lg">Cost: $200</ Badge> </h2>
                    <h4>Template: School</h4>
                    <ListGroup style={{ backgroundColor: "#333333", color: 'red'}}>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>Case: case 1</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>GPU: gpu 1</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>CPU: CPU 1</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>Processor: intel potato</ListGroup.Item>
                    </ListGroup>
                    <Button 
                            variant="primary"
                            size="lg"
                            style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}}
                            onClick={() => routeChange()}>Customize</Button>
                </div>
            </Col>
            <Col>
                <div className="build-components">
                        <h1>Order Status: <Badge bg="primary" size="lg">Not Submitted</ Badge></h1>
                        
                        <h4>Give us some contact information</h4>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" style={{backgroundColor: '#333333', color: 'white'}}>Email</InputGroup.Text>
                        <Form.Control
                            style={{backgroundColor: '#333333', color: 'white'}}
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="email-final"
                        />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" style={{backgroundColor: '#333333', color: 'white'}}>Phone Number</InputGroup.Text>
                        <Form.Control
                            style={{backgroundColor: '#333333', color: 'white'}}
                            placeholder="012-345-6789"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="phone-final"
                        />
                        </InputGroup>
                        {invalidForm ? <Badge pill="true" bg="danger" style={{fontSize: '100%', margin: '10px 0px'}}>No Record Found! Try again, or contact us for more help. </Badge> : <></>} 
                        <h6>We only use your info to set up a quick consulting session.</h6>
                        
                        <Button 
                            variant="primary"
                            size="lg"
                            style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}}
                            onClick={() => updateForm()}>{!submitted ? "Submit Build" : "Pull Build"}</Button>
                    </div>
                    <div className="build-components">
                        <h1>Order Info</h1>
                        <p>
                            You'll get a consulting call from one of our experts regarding final pricing
                            and shipping details after submitting. They'll also offer any advice they have on your build to
                            ensure you're happy with your new PC. Feel free to contact us with any questions. Queries will have an
                            answer within 24 hours. 
                        </p>
                    </div>
            </Col>
        </Row>
    );
}