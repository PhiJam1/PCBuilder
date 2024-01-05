import React, { useEffect, useState } from 'react';
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
    const [currCase, setCurrCase] = useState("");
    const [currCPU, setCurrCPU] = useState("");
    const [currCPUCooler, setCurrCPUCooler] = useState("");
    const [currMotherboard, setCurrMotherboard] = useState("");
    const [currMemory, setCurrMemory] = useState("");
    const [currStorage, setCurrStorage] = useState("");
    const [currGPU, setCurrGPU] = useState("");
    const [currPowerSupply, setCurrPowerSupply] = useState("");
    const [currOperatingSystem, setCurrOperatingSystem] = useState("");
    const [currCost, setCost] = useState(0);
    const [currTemplateName, setCurrTemplateName] = useState("");
    const [currStatus, setCurrStatus] = useState("");
    const [currEmail, setCurrEmail] = useState("");
    const [currPhoneNumber, setCurrPhoneNumber] = useState("");
    const [savedContactInfo, setSavedContactInfo] = useState(false);
    const [currCosts, setCurrCosts] = useState({
        "CPU": 0.00,
        "CASE": 0.00,
        "CPU_COOLER": 0.00,
        "MOTHERBOARD": 0.00,
        "MEMORY": 0.00,
        "STORAGE": 0.00,
        "GPU": 0.00,
        "POWER_SUPPLY": 0.00,
        "OPERATING_SYSTEM": 0.00
    });

    function update_contact_info() {
        let email = document.getElementById("email-final").value;
        let phone = document.getElementById("phone-final").value;
        if (email === "" || phone === "") {
            setInvalidForm(true);
            return;
        }

        // update the contact info
        const requestOptionsContactInfo = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"buildNum": buildNum, "email": email, "phone_number": phone})
        };
        fetch(`http://127.0.0.1:8000/update_contact_info/`, requestOptionsContactInfo)
        setSavedContactInfo(true);
    }
    function updateStatus() {
        let email = document.getElementById("email-final").value;
        let phone = document.getElementById("phone-final").value;

        if (currStatus === "UNFINISHED" && (email === "" || phone === "")) {
            setInvalidForm(true);
            return;
        }

        if (currStatus === "UNFINISHED") {
            // update the status 
            const requestOptionsStatus = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"buildNum": buildNum, "status": "SUBMITTED"})
            };
            fetch(`http://127.0.0.1:8000/update_status/`, requestOptionsStatus)
            setSubmitted(true);
            // update the contact info
            const requestOptionsContactInfo = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"buildNum": buildNum, "email": email, "phone_number": phone})
            };
            fetch(`http://127.0.0.1:8000/update_contact_info/`, requestOptionsContactInfo)
        } else if (currStatus === "PULLED") {
            const requestOptionsStatus = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"buildNum": buildNum, "status": "SUBMITTED"})
            };
            fetch(`http://127.0.0.1:8000/update_status/`, requestOptionsStatus);
            setSubmitted(true);
        } else {
            const requestOptionsStatus = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"buildNum": buildNum, "status": "PULLED"})
            };
            fetch(`http://127.0.0.1:8000/update_status/`, requestOptionsStatus)
            setSubmitted(false);
        }
        setInvalidForm(false);
    }

    const phoneChange = (event) => {
        setCurrPhoneNumber(event.target.value);
        setSavedContactInfo(false);
    };

    const emailChange = (event) => {
        setCurrEmail(event.target.value);
        setSavedContactInfo(false);
    };
    
    let navigate = useNavigate(); 
    function routeChange() { 
        let path = "/Design_Studio/" + buildNum + "/"; 
        navigate(path);
    }
    
    // get data on current build from backend
    const fetchData = async (endpoint, setter) => {
        try {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setter(data);
        //   console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    

    // set initial values
    useEffect(() => {
        fetchData(`http://127.0.0.1:8000/curr_cpu/?buildNum=${buildNum}`, setCurrCPU);
        fetchData(`http://127.0.0.1:8000/curr_case/?buildNum=${buildNum}`, setCurrCase);
        fetchData(`http://127.0.0.1:8000/curr_cpu_cooler/?buildNum=${buildNum}`, setCurrCPUCooler);
        fetchData(`http://127.0.0.1:8000/curr_motherboard/?buildNum=${buildNum}`, setCurrMotherboard);
        fetchData(`http://127.0.0.1:8000/curr_memory/?buildNum=${buildNum}`, setCurrMemory);
        fetchData(`http://127.0.0.1:8000/curr_storage/?buildNum=${buildNum}`, setCurrStorage);
        fetchData(`http://127.0.0.1:8000/curr_gpu/?buildNum=${buildNum}`, setCurrGPU);
        fetchData(`http://127.0.0.1:8000/curr_power_supply/?buildNum=${buildNum}`, setCurrPowerSupply);
        fetchData(`http://127.0.0.1:8000/curr_operating_system/?buildNum=${buildNum}`, setCurrOperatingSystem);
        fetchData(`http://127.0.0.1:8000/get_cost/?buildNum=${buildNum}`, setCost);
        fetchData(`http://127.0.0.1:8000/get_template_name/?buildNum=${buildNum}`, setCurrTemplateName);
        fetchData(`http://127.0.0.1:8000/get_part_costs/?buildNum=${buildNum}`, setCurrCosts);
    }, []);

    useEffect(() => {
        fetchData(`http://127.0.0.1:8000/get_status/?buildNum=${buildNum}`, setCurrStatus);
        fetchData(`http://127.0.0.1:8000/get_email/?buildNum=${buildNum}`, setCurrEmail);
        fetchData(`http://127.0.0.1:8000/get_phone_number/?buildNum=${buildNum}`, setCurrPhoneNumber);
    }, [submitted]);

    return (
        <Row style={{margin: '0px'}}>
            <Col>
                <div className="build-components">
                    <h1>Current Build Info</h1>
                    <h2><Badge bg="primary" size="lg">Estimated Cost: ${currCost}</ Badge> </h2>
                    <h4>Template: {currTemplateName}</h4>
                    <ListGroup style={{ backgroundColor: "#333333", color: 'red'}}>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>Case: {currCase} | ${currCosts["CASE"]} </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>CPU: {currCPU} | ${currCosts["CPU"]} </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>CPU COOLER: {currCPUCooler} | ${currCosts["CPU_COOLER"]} </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>MOTHERBOARD: {currMotherboard} | ${currCosts["MOTHERBOARD"]}  </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>MEMORY: {currMemory} | ${currCosts["MEMORY"]}  </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>STORAGE: {currStorage} | ${currCosts["STORAGE"]}  </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>GPU: {currGPU} | ${currCosts["GPU"]}  </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>POWER SUPPLY: {currPowerSupply} | ${currCosts["POWER_SUPPLY"]}  </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>OPERATING SYSTEM: {currOperatingSystem} | ${currCosts["OPERATING_SYSTEM"]}  </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>OTHER: {currGPU} </ListGroup.Item>
                    </ListGroup>
                    <Button 
                            variant="primary"
                            size="lg"
                            style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}}
                            onClick={() => routeChange()}>Edit</Button>
                </div>
            </Col>
            <Col>
                <div className="build-components">
                        <h1>Order Status: <Badge bg="primary" size="lg">{currStatus}</ Badge></h1>
                        
                        <h4>Give us some contact information</h4>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" style={{backgroundColor: '#333333', color: 'white'}}>Email</InputGroup.Text>
                        <Form.Control
                            style={{backgroundColor: '#333333', color: 'white'}}
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={currEmail}
                            onChange={emailChange}
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
                            value={currPhoneNumber}
                            onChange={phoneChange}
                            id="phone-final" />
                        </InputGroup>
                        {savedContactInfo && <Badge pill="true" bg="info" style={{fontSize: '100%', marginBottom: '10px'}}> Saved! </Badge>}
                        {invalidForm ? <Badge pill="true" bg="danger" style={{fontSize: '100%', marginBottom: '10px'}}> Please fill out both fields.</Badge> : <></>} 
                        <h6>We only use your info to set up a quick consulting session.</h6>
                        
                        <Button 
                            variant="primary"
                            size="lg"
                            style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}}
                            onClick={() => updateStatus()}>{!submitted ? "Submit Build" : "Pull Build"}</Button>
                        {submitted && <Button 
                            variant="primary"
                            size="lg"
                            style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}}
                            onClick={() => update_contact_info()}>Update Contact Info</Button>}
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