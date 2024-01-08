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
import Axios, { HttpStatusCode } from 'axios';
import { BACKEND } from '../pages/constants'; 

export const PartsTable = (props) => {
    let buildNum = props.buildNum
    
    // function that will get catalog information from the backend
    const fetchData = async (endpoint, catalogSetter) => {
        try {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          if (response.status === 200 || response.status === 202) {
            console.log("code good")
            const data = await response.json();
            catalogSetter(data);
          }
          //   console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    const [cases, setCases] = useState([]);
    const [currCase, setCurrCase] = useState();
    const [cpus, setCpus] = useState([]);
    const [currCPU, setCurrCPU] = useState();
    const [CPUCoolers, setCPUCoolers] = useState([]);
    const [currCPUCooler, setCurrCPUCooler] = useState();
    const [motherboards, setMotherboards] = useState([]);
    const [currMotherboard, setCurrMotherboard] = useState();
    const [memories , setMemories] = useState([]);
    const [currMemory, setCurrMemory] = useState();
    const [storages, setStorages] = useState([]);
    const [currStorage, setCurrStorage] = useState();
    const [GPUs, setGPUs] = useState([]);
    const [currGPU, setCurrGPU] = useState();
    const [powerSupply, setPowerSupply] = useState([]);
    const [currPowerSupply, setCurrPowerSupply] = useState();
    const [operatingSystem, setOperatingSystems] = useState([]);
    const [currOperatingSystem, setCurrOperatingSystem] = useState();
    const [currOther, setCurrOther] = useState();
    const [currOtherCost, setCurrOtherCost] = useState();
    const [currCost, setCurrCost] = useState();
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

    // set initial values
    useEffect(() => {
        // catalog parts
        fetchData(BACKEND + "/all_cpus/", setCpus);
        fetchData(BACKEND + "/all_cases/", setCases);
        fetchData(BACKEND + "/all_cpu_coolers/", setCPUCoolers);
        fetchData(BACKEND + "/all_motherboards/", setMotherboards);
        fetchData(BACKEND + "/all_memories/", setMemories);
        fetchData(BACKEND + "/all_storage/", setStorages);
        fetchData(BACKEND + "/all_gpus/", setGPUs);
        fetchData(BACKEND + "/all_power_supply/", setPowerSupply);
        fetchData(BACKEND + "/all_operating_systems/", setOperatingSystems);

        // parts for the current build
        fetchData(`${BACKEND}/curr_cpu/?buildNum=${buildNum}`, setCurrCPU);
        fetchData(`${BACKEND}/curr_case/?buildNum=${buildNum}`, setCurrCase);
        fetchData(`${BACKEND}/curr_cpu_cooler/?buildNum=${buildNum}`, setCurrCPUCooler);
        fetchData(`${BACKEND}/curr_motherboard/?buildNum=${buildNum}`, setCurrMotherboard);
        fetchData(`${BACKEND}/curr_memory/?buildNum=${buildNum}`, setCurrMemory);
        fetchData(`${BACKEND}/curr_storage/?buildNum=${buildNum}`, setCurrStorage);
        fetchData(`${BACKEND}/curr_gpu/?buildNum=${buildNum}`, setCurrGPU);
        fetchData(`${BACKEND}/curr_power_supply/?buildNum=${buildNum}`, setCurrPowerSupply);
        fetchData(`${BACKEND}/curr_operating_system/?buildNum=${buildNum}`, setCurrOperatingSystem);
        fetchData(`${BACKEND}/get_part_costs/?buildNum=${buildNum}`, setCurrCosts);

        fetchData(`${BACKEND}/get_other/?buildNum=${buildNum}`, setCurrOther);
        fetchData(`${BACKEND}/get_other_cost/?buildNum=${buildNum}`, setCurrOtherCost);
        
        // fetchData(`http://127.0.0.1:8000/get_cost/?buildNum=${buildNum}`, setCurrCost);
    }, [currCPU, currCPUCooler, currCase, currMotherboard, currMemory, currStorage, currGPU, currPowerSupply, currOperatingSystem]);

    useEffect(() => {
        fetchData(`${BACKEND}/get_cost/?buildNum=${buildNum}`, setCurrCost);
    }, [currCase, currCPU, currCPUCooler, currMotherboard, currMemory, currStorage, currGPU, currPowerSupply, currOperatingSystem]);

    function setCurrBackend(endpoint, title) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"newPart": title})
        };
        fetch(`${BACKEND}/${endpoint}/?buildNum=${buildNum}`, requestOptions)
    }

    function updateCurrCase(title) {
        setCurrBackend("curr_case", title);
        setCurrCase(title);
    }
    
    function updateCurrCPU(title) {
        setCurrBackend("curr_cpu", title);
        setCurrCPU(title);
    }
    
    function updateCurrCPUCooler(title) {
        setCurrBackend("curr_cpu_cooler", title);
        setCurrCPUCooler(title);
    }

    function updateCurrMotherboard(title) {
        setCurrBackend("curr_motherboard", title);
        setCurrMotherboard(title);
    }

    function updateCurrMemory(title) {
        setCurrBackend("curr_memory", title);
        setCurrMemory(title);
    }

    function updateCurrStorage(title) {
        setCurrBackend("curr_storage", title);
        setCurrStorage(title);
    }
    
    function updateCurrGPU(title) {
        setCurrBackend("curr_gpu", title);
        setCurrGPU(title);
    }

    function updateCurrPowerSupply(title) {
        setCurrBackend("curr_power_supply", title);
        setCurrPowerSupply(title);
    }

    function updateCurrOperatingSystem(title) {
        setCurrBackend("curr_operating_system", title);
        setCurrOperatingSystem(title);
    }
    return ( // this stuff is JSX
        <div className="list-group list-group-mine">
            <UpdateExplanation />
            <h4>Estimated Cost: ${currCost}</h4>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#case"  >
                <Row >
                    <Col sm={3} >
                        <ListGroup >
                            <ListGroup.Item action href="#case">
                                Case | {currCase ? currCase + " | $" + currCosts["CASE"]:  <Badge bg="info">Unselected</Badge>}

                            </ListGroup.Item>
                            <ListGroup.Item action href="#cpu">
                                CPU | {currCPU ? currCPU + " | $" + currCosts["CPU"]:  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#cpu_cooler">
                                CPU Cooler | {currCPUCooler ? currCPUCooler + " | $" + currCosts["CPU_COOLER"]:  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#motherboard">
                                Motherboard | {currMotherboard ? currMotherboard + " | $" + currCosts["MOTHERBOARD"]:  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#memory">
                                Memory | {currMemory ? currMemory + " | $" + currCosts["MEMORY"]:  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#storage">
                                Storage | {currStorage ? currStorage + " | $" + currCosts["STORAGE"]:  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#gpu">
                                GPU | {currGPU ? currGPU + " | $" + currCosts["GPU"]:  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#power_supply">
                                Power Supply | {currPowerSupply ? currPowerSupply + " | $" + currCosts["POWER_SUPPLY"]:  <Badge bg="info">Unselected</Badge>}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#operating_system">
                                Operating System | {currOperatingSystem ? currOperatingSystem + " | $" + currCosts["OPERATING_SYSTEM"]:  <Badge bg="info">Unselected</Badge>}
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
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currCase} setter={updateCurrCase} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#cpu">
                                <div className='selectBox'>
                                    {cpus.map(item => (
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currCPU} setter={updateCurrCPU} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#cpu_cooler">
                                <div className='selectBox'>
                                    {CPUCoolers.map(item => (
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currCPUCooler} setter={updateCurrCPUCooler} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#motherboard">
                                <div className='selectBox'>
                                    {motherboards.map(item => (
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currMotherboard} setter={updateCurrMotherboard} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#memory">
                                <div className='selectBox'>
                                    {memories.map(item => (
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currMemory} setter={updateCurrMemory} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#storage">
                                <div className='selectBox'>
                                    {storages.map(item => (
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currStorage} setter={updateCurrStorage} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#gpu">
                                <div className='selectBox'>
                                    {GPUs.map(item => (
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currGPU} setter={updateCurrGPU} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#power_supply">
                                <div className='selectBox'>
                                    {powerSupply.map(item => (
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currPowerSupply} setter={updateCurrPowerSupply} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#operating_system">
                                <div className='selectBox'>
                                    {operatingSystem.map(item => (
                                        < MakeCard title={item.name} cost={item.cost} description={item.description} current={item.name === currOperatingSystem} setter={updateCurrOperatingSystem} />
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#other">
                                < OtherAdditions buildNum={buildNum}/>
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



function MakeCard({title, cost, description, current, setter}) {
    
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
                <h5>${cost}</h5>
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


function OtherAdditions(props) {
    const [estimatedCost, setEstimatedCost] = useState(0);
    const [extraParts, setExtraParts] = useState();
    const [showSaved, setShowSaved] = useState(false);

    // get other content from the backend 
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

    useEffect(() => {
        fetchData(`${BACKEND}/get_other/?buildNum=${props.buildNum}`, setExtraParts);
        fetchData(`${BACKEND}/get_other_cost/?buildNum=${props.buildNum}`, setEstimatedCost);
    }, []);



    const costChange = (event) => {
        setEstimatedCost(event.target.value);
        setShowSaved(false);
    };

    const extraPartsChange = (event) => {
        setExtraParts(event.target.value);
        setShowSaved(false);
    }

    async function saveBTN() {
        setEstimatedCost(document.getElementById("extraEstimatedCost").value);
        setExtraParts(document.getElementById("extraDescription").value);
        // console.log(extraParts)

        // make backend call to actually save this data
        const requestOptionsParts = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"other": extraParts, "buildNum": props.buildNum})
        };
        await fetch(`${BACKEND}/set_other/?buildNum=${props.buildNum}`, requestOptionsParts)

        const requestOptionsCost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"otherCost": estimatedCost, "buildNum": props.buildNum})
        };
        await fetch(`${BACKEND}/set_other_cost/?buildNum=${props.buildNum}`, requestOptionsCost)
        console.log(estimatedCost);
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
                    value={extraParts}
                    onChange={extraPartsChange}>
                        
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