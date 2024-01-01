import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import './../pages/BuildPage.css';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ContactUSIm from './../Images/ContactUSIm.jpg';
import Badge from 'react-bootstrap/Badge';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Axios from 'axios';

export const PartsTable = (props) => {
    let buildNum = props.buildNum
    
    // function that will get catalog information from the backend
    const fetchData = async (endpoint, catalogSetter) => {
        try {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          catalogSetter(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    /* CASES */
    const [cases, setCases] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_cases/", setCases);
    }, []);
    
    // set up react useState hook for current case. Set it with data from the backend
    const [currCase, setCurrCase] = useState();
    function updateCurrCase(title) {
        //todo: make a backend request to update this as well. 
        setCurrCase(title);
    }

    /* CPUs */
    const [cpus, setCpus] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_cpus/", setCpus);
    }, []);

    const [currCPU, setCurrCPU] = useState();
    function updateCurrCPU(title) {
        //todo: make a backend request to update this as well.
        setCurrCPU(title);
    }
    

    /* CPU Coolers */
    const [CPUCoolers, setCPUCoolers] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_cpus/", setCPUCoolers);
    }, []);
    const [currCPUCooler, setCurrCPUCooler] = useState();
    
    function updateCurrCPUCooler(title) {
        setCurrCPUCooler(title);
    }


    /* MOTHERBOARDS */
    const [motherboards, setMotherboards] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_motherboards/", setMotherboards);
    }, []);
    
    const [currMotherboard, setCurrMotherboard] = useState();
    
    function updateCurrMotherboard(title) {
        setCurrMotherboard(title);
    }


    /* MEMORIES */
    const [memories , setMemories] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_memories/", setMemories);
    }, []);

    const [currMemory, setCurrMemory] = useState();

    function updateCurrMemory(title) {
        setCurrMemory(title);
    }

    /*  STORAGES */
    const [storages, setStorages] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_storage/", setStorages);
    }, []);
    const [currStorage, setCurrStorage] = useState();

    function updateCurrStorage(title) {
        setCurrStorage(title);
    }


    /* GPU */
    const [GPUs, setGPUs] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_gpus/", setGPUs);
    }, []);
    
    const [currGPU, setCurrGPU] = useState();
    function updateCurrGPU(title) {
        setCurrGPU(title);
    }

    const [powerSupply, setPowerSupply] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_power_supply/", setPowerSupply);
    }, []);
    const [currPowerSupply, setCurrPowerSupply] = useState();

    function updateCurrPowerSupply(title) {
        setCurrPowerSupply(title);
    }

    
    const [operatingSystem, setOperatingSystems] = useState([]);
    useEffect(() => {
        fetchData("http://127.0.0.1:8000/all_operating_systems/", setOperatingSystems);
    }, []);
    const [currOperatingSystem, setCurrOperatingSystem] = useState();

    function updateCurrOperatingSystem(title) {
        setCurrOperatingSystem(title);
    }


    return ( // this stuff is JSX
        <div className="list-group list-group-mine">
            <UpdateExplanation />
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#case"  >
                <Row >
                    <Col sm={3} >
                        <ListGroup >
                            <ListGroup.Item action href="#case">
                                Case | {currCase ? currCase :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#cpu">
                                CPU | {currCPU ? currCPU :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#cpu_cooler">
                                CPU Cooler | {currCPUCooler ? currCPUCooler :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#motherboard">
                                Motherboard | {currMotherboard ? currMotherboard :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#memory">
                                Memory | {currMemory ? currMemory :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#storage">
                                Storage | {currStorage ? currStorage :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#gpu">
                                GPU | {currGPU ? currGPU :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#power_supply">
                                Power Supply | {currPowerSupply ? currPowerSupply :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#operating_system">
                                Operating System | {currOperatingSystem ? currOperatingSystem :  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#other">
                                Other
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <div>
                        <Tab.Content>
                            <Tab.Pane eventKey="#case">
                                <div className='selectBox'>
                                    {cases.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currCase} setter={updateCurrCase} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#cpu">
                                <div className='selectBox'>
                                    {cpus.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currCPU} setter={updateCurrCPU} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#cpu_cooler">
                                <div className='selectBox'>
                                    {CPUCoolers.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currCPUCooler} setter={updateCurrCPUCooler} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#motherboard">
                                <div className='selectBox'>
                                    {motherboards.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currMotherboard} setter={updateCurrMotherboard} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#memory">
                                <div className='selectBox'>
                                    {memories.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currMemory} setter={updateCurrMemory} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#storage">
                                <div className='selectBox'>
                                    {storages.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currStorage} setter={updateCurrStorage} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#gpu">
                                <div className='selectBox'>
                                    {GPUs.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currGPU} setter={updateCurrGPU} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#power_supply">
                                <div className='selectBox'>
                                    {powerSupply.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currPowerSupply} setter={updateCurrPowerSupply} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#operating_system">
                                <div className='selectBox'>
                                    {operatingSystem.map(item => (
                                        < MakeCard title={item.name} description={item.description} current={item.name === currOperatingSystem} setter={updateCurrOperatingSystem} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#other">
                                < OtherAdditions />
                            </Tab.Pane>
                        </Tab.Content>
                        </div>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}


function UpdateExplanation() {
    var type = window.location.hash.substring(1);

    let partName = "";
    let partDescription = "";
    if (type === "case" || type === "") {
        // all of these should be backend calls, unless yu wants to just hard code it which, now that I think of it, may be sufficient.
        partName = "Case";
        partDescription = "Case description goes here.";
    } else if (type === "cpu") {
        partName = "CPU";
        partDescription = "CPU description goes here.";
    } else if (type === "cpu_cooler") {
        partName = "CPU Cooler";
        partDescription = "CPU cooler description goes here.";
    } else if (type === "motherboard") {
        partName = "Motherboard";
        partDescription = "Motherboard description goes here.";
    } else if (type === "memory") {
        partName = "Memory";
        partDescription = "Memory description goes here.";
    } else if (type === "storage") {
        partName = "Storage";
        partDescription = "Storage description goes here.";
    } else if (type === "gpu") {
        partName = "GPU";
        partDescription = "GPU description goes here.";
    } else if (type === "power_supply") {
        partName = "Power Supply";
        partDescription = "Power Supply description goes here.";
    } else if (type === "operating_system") {
        partName = "Operating System";
        partDescription = "Operating System description goes here.";
    } else if (type === "other") {
        partName = "Add your own parts!";
        partDescription = "Choose wisely.";
    }
    
    return (
        <div>
            <h1>{partName}</h1>
            <p>{partDescription}</p>
        </div>
    );
}



function MakeCard({title, description, current, setter}) {
    
    return (
        <Card >
        <Card.Body style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: "#333333",
            color: "white",
            border: "white solid 1px"
            }}>
            <div style={{overflow: 'auto', padding: '5px'}}>
            <Card.Title>
                {title}
                {(current ? <Badge bg="info" style={{marginLeft: '10px'}}>Current</Badge> : "")} 
            </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          </div>
          <Button 
            variant={"primary " + (current ? "disabled" : "active")}
            size="lg"
            style={{padding: '10px 20px', fontSize: '1.5rem', background: '#8011ec', borderColor: '#8011ec', margin: '0px'}}
            onClick={() => setter(title)}>Add To Build</Button>
        </Card.Body>
      </Card>
    );
}


function OtherAdditions() {
    const [estimatedCost, setEstimatedCost] = useState(33);
    const [extraParts, setExtraParts] = useState();
    const [showSaved, setShowSaved] = useState(false);
    
    const costChange = (event) => {
        setEstimatedCost(event.target.value);
        setShowSaved(false);
    };

    const extraPartsChange = (event) => {
        setShowSaved(false);
    }

    function saveBTN() {
        setEstimatedCost(document.getElementById("extraEstimatedCost").value);
        setExtraParts(document.getElementById("extraDescription").value);
        console.log(extraParts)
        setShowSaved(true);
    }
    
    return (
        <div>
            <Form.Label>Total Estimated Cost For all Additions</Form.Label>
            <InputGroup className="mb-3">
                
                <InputGroup.Text style={{background: '#333333', color: 'white'}} >$</InputGroup.Text>
                
                <Form.Control
                    aria-label="Amount (to the nearest dollar)" 
                    type="number"
                    placeholder='$$$'
                    style={{background: '#333333', color: 'white'}} 
                    value={estimatedCost} 
                    onChange={costChange}
                    id="extraEstimatedCost" 
                />
            </InputGroup>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Extra Parts and Requests</Form.Label>
                    <Form.Control 
                    size="lg" 
                    as="textarea"
                    rows={3}
                    style={{background: '#333333', color: 'white', overflow: 'auto'}}
                    id="extraDescription"
                    onChange={extraPartsChange}>
                        {extraParts}
                    </Form.Control>
                </Form.Group>
            </Form>
            {showSaved && <Badge pill="true" bg="primary" style={{fontSize: '100%', marginBottom: '20px'}}>Saved</Badge>} <br />
            <Button 
                variant="primary"
                size="lg"
                style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '0px'}}
                onClick={() => saveBTN()}>
                    Save
            </Button>
            
        </div>
    )
}