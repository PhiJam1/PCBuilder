import React from 'react';
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

export const PartsTable = (props) => {
    let buildNum = props.buildNum

    return ( // this stuff is JSX
        <div className="list-group list-group-mine">
            <h1>Customize Your New PC</h1>
            <h2>
                Your build number: {buildNum}
                <Badge pill bg="warning" style={{marginLeft: '20px'}}>Important</Badge> 
            </h2>
            <hr></hr>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#case"  >
                <Row >
                    <Col sm={4} >
                        <ListGroup >
                            <ListGroup.Item action href="#case">
                                Case
                            </ListGroup.Item>
                            <ListGroup.Item action href="#cpu">
                                CPU
                            </ListGroup.Item>
                            <ListGroup.Item action href="#cpu_cooler">
                                CPU Cooler
                            </ListGroup.Item>
                            <ListGroup.Item action href="#motherboard">
                                Motherboard
                            </ListGroup.Item>
                            <ListGroup.Item action href="#memory">
                                Memory
                            </ListGroup.Item>
                            <ListGroup.Item action href="#storage">
                                Storage
                            </ListGroup.Item>
                            <ListGroup.Item action href="#gpu">
                                GPU
                            </ListGroup.Item>
                            <ListGroup.Item action href="#power_supply">
                                Power Supply
                            </ListGroup.Item>
                            <ListGroup.Item action href="#operating_system">
                                Operating System
                            </ListGroup.Item>
                            <ListGroup.Item action href="#monitor">
                                Monitor
                            </ListGroup.Item>
                            <ListGroup.Item action href="#other">
                                Other
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#case">{GetCases(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#cpu">{GetCPU(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#cpu_cooler">{GetCPUCooler(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#motherboard">{GetMotherboard(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#memory">{GetMemory(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#storage">{GetStorage(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#gpu">{GetGPU(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#power_supply">{GetPowerSupply(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#operating_system">{GetOperatingSystem(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#monitor">{GetMonitor(buildNum)}</Tab.Pane>
                            <Tab.Pane eventKey="#other">other Selection</Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}



function MakeCard({title, description}) {
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
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          </div>
          <Button 
            variant="primary"
            size="lg"
            style={{padding: '10px 20px', fontSize: '1.5rem', background: '#8011ec', borderColor: '#8011ec', margin: '0px'}}
            onClick={console.log("btn clicked")}>Add To Build</Button>
        </Card.Body>
      </Card>
    );
}


function GetCases(buildNum) {
    return (
        // set the width of this div to some percent. then set the border box thing
        // maybe also change the top margin to be 0. 
        <div className='selectBox'>
            < MakeCard title="Case 1" description="This is a good product" />
            < MakeCard title="Case 2" description="This is gross" />
            < MakeCard title="Case 3" description="Good performance for cheap price" />
            < MakeCard title="Case 4" description="Personal Favorite" />
            < MakeCard title="Case 5" description="black" />
        </div>
    );
}

function GetCPU(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title="CPU 1" description="This is a good product" />
            < MakeCard title="CPU 2" description="This is gross" />
            < MakeCard title="CPU 3" description="Good performance for cheap price" />
            < MakeCard title="CPU 4" description="Personal Favorite" />
            < MakeCard title="CPU 5" description="black" />
        </div>
    );
}

function GetCPUCooler(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title="CPU cooler 1" description="This is a good product" />
            < MakeCard title="CPU cooler 2" description="This is gross" />
            < MakeCard title="CPU cooler 3" description="Good performance for cheap price" />
            < MakeCard title="CPU cooler 4" description="Personal Favorite" />
            < MakeCard title="CPU cooler 5" description="black" />
        </div>
    );
}

function GetMotherboard(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title="Motherboard 1" description="This is a good product" />
            < MakeCard title="Motherboard 2" description="This is gross" />
            < MakeCard title="Motherboard 3" description="Good performance for cheap price" />
            < MakeCard title="Motherboard 4" description="Personal Favorite" />
            < MakeCard title="Motherboard 5" description="black" />
        </div>
    );
}



function GetMemory(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title="Memory 1" description="This is a good product" />
            < MakeCard title="Memory 2" description="This is gross" />
            < MakeCard title="Memory 3" description="Good performance for cheap price" />
            < MakeCard title="Memory 4" description="Personal Favorite" />
            < MakeCard title="Memory 5" description="black" />
        </div>
    );
}



function GetStorage(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title= "Storage 1" description="This is a good product" />
            < MakeCard title="Storage 2" description="This is gross" />
            < MakeCard title="Storage 3" description="Good performance for cheap price" />
            < MakeCard title="Storage 4" description="Personal Favorite" />
            < MakeCard title="Storage 5" description="black" />
        </div>
    );
}


function GetGPU(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title="GPU 1" description="This is a good product" />
            < MakeCard title="GPU 2" description="This is gross" />
            < MakeCard title="GPU 3" description="Good performance for cheap price" />
            < MakeCard title="GPU 4" description="Personal Favorite" />
            < MakeCard title="GPU 5" description="black" />
        </div>
    );
}



function GetPowerSupply(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title="Power Supply 1" description="This is a good product" />
            < MakeCard title="Power Supply 2" description="This is gross" />
            < MakeCard title="Power Supply 3" description="Good performance for cheap price" />
            < MakeCard title="Power Supply 4" description="Personal Favorite" />
            < MakeCard title="Power Supply 5" description="black" />
        </div>
    );
}


function GetOperatingSystem(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title="Operating System 1" description="This is a good product" />
            < MakeCard title="Operating System 2" description="This is gross" />
            < MakeCard title="Operating System 3" description="Good performance for cheap price" />
            < MakeCard title="Operating System 4" description="Personal Favorite" />
            < MakeCard title="Operating System 5" description="black" />
        </div>
    );
}


function GetMonitor(buildNum) {
    return (
        <div className='selectBox'>
            < MakeCard title="Monitor 1" description="This is a good product" />
            < MakeCard title="Monitor 2" description="This is gross" />
            < MakeCard title="Monitor 3" description="Good performance for cheap price" />
            < MakeCard title="Monitor 4" description="Personal Favorite" />
            < MakeCard title="Monitor 5" description="black" />
        </div>
    );
}
