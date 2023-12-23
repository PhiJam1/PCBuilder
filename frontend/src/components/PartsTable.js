import React from 'react';

import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import './../pages/BuildPage.css';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export const PartsTable = () => {
    return ( // this stuff is JSX
        <div className="list-group list-group-mine">
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
                            <Tab.Pane eventKey="#case">Case Selection</Tab.Pane>
                            <Tab.Pane eventKey="#cpu">cpu Selection</Tab.Pane>
                            <Tab.Pane eventKey="#cpu_cooler">cpu cooler Selection</Tab.Pane>
                            <Tab.Pane eventKey="#motherboard">Motherboard  Selection</Tab.Pane>
                            <Tab.Pane eventKey="#memory">memory Selection</Tab.Pane>
                            <Tab.Pane eventKey="#storage">storage Selection</Tab.Pane>
                            <Tab.Pane eventKey="#gpu">gpu Selection</Tab.Pane>
                            <Tab.Pane eventKey="#power_supply">power supply  Selection</Tab.Pane>
                            <Tab.Pane eventKey="#operating_system">operating system Selection</Tab.Pane>
                            <Tab.Pane eventKey="#monitor">monitor Selection</Tab.Pane>
                            <Tab.Pane eventKey="#other">other Selection</Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}