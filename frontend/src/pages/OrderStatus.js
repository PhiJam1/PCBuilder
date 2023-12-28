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
import FinalOrderStatus from '../components/FinalOrderStatus';
export const OrderStatus = () => {
    const { buildNum } = useParams();


    let navigate = useNavigate(); 

    if (!buildNum) {        
        return (
            <OrderQuery />
        );
    }

    return (
         <FinalOrderStatus />
    );

}