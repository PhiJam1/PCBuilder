import React, { useState } from 'react';
import "./../pages/OrderStatus.css";
import { useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import { Badge } from "react-bootstrap";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function FinalOrderStatus() {
    const [submitted, setSubmitted] = useState(false); // this should be a call to backend based on buildNum

    function updateSubmit() {
        // make backend call
        setSubmitted(!submitted);
    }

    return (
        <Row style={{margin: '0px'}}>
            <Col>
                <div className="build-components">
                    <h1>Current Build Info</h1>
                    <h2><Badge bg="primary" size="lg">Cost: $200</ Badge> </h2>
                    <ul>
                        <li>Case: Case 1</li>
                        <li>CPU: CPU 2</li>
                        <li>Operating System: Kali</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <div className="build-components">
                        <h1>Order Status: <Badge bg="primary" size="lg">Not Submitted</ Badge></h1>
                        <ul>
                            <li>Case: Case 1</li>
                            <li>CPU: CPU 2</li>
                            <li>Operating System: Kali</li>
                        </ul>
                        <Button 
                            variant="primary"
                            size="lg"
                            style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}}
                            onClick={() => updateSubmit()}>{!submitted ? "Submit" : "Pull Order"}</Button>
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