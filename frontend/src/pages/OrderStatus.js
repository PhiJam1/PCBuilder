import React, { useState } from 'react';
import "./OrderStatus.css";
import { useParams } from 'react-router-dom';
import OrderQuery from '../components/OrderQuery';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import { Badge } from "react-bootstrap";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const OrderStatus = () => {
    const { buildNum } = useParams();


    let navigate = useNavigate(); 
    

    if (!buildNum) {        
        return (
            <OrderQuery />
        );
    }

    return ( // this stuff is JSX
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
                    <h1>Order Status: <Badge bg="primary" size="lg">In Queue</ Badge></h1>
                    
                    <ul>
                        <li>Case: Case 1</li>
                        <li>CPU: CPU 2</li>
                        <li>Operating System: Kali</li>
                    </ul>
                </div>
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
        </Row>
    );
}