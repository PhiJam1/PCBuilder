import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useSearchParams } from "react-router-dom";
import './../pages/PcBuilderPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { Badge, Tab } from "react-bootstrap";
import { BACKEND } from '../pages/constants'; 

export default function TemplateBuilds() {
    const [templates, setTemplates] = useState([]);
    
    const fetchData = async (endpoint, setter) => {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setter(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData(BACKEND + "/all_templates/", setTemplates);
    }, []);


    let navigate = useNavigate();
    const routeChange = async (buildNum) => {
        console.log(buildNum)
        // make a new build registered with the backend
        try {
            const response = await fetch(BACKEND + '/register_build/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                // Add any additional headers here
              },
              body: JSON.stringify({"templateBuildNum": buildNum}) // will be 0 for a start from scratch
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const responseData = await response.json();
            console.log('POST request successful:', responseData);
            navigate("/Design_Studio/" + responseData.buildNum);
          } catch (error) {
            console.error('Error making POST request - 333:', error);
          }
    }

    
    return (
        <div className='full-card'>
            {templates.map((template) => (
                makeCard(template, routeChange)
            ))}
        </div>
    );
};




function makeCard(template, routeChange) {
    let partsDict = template.parts;
    let costsDict = template.partCosts;
    // get the parts list

    return (
        <Card style={{ width: '45%', padding: '20px', margin: '20px', backgroundColor: "#333333", color: 'white' }}>
            <Card.Body>
                <Card.Title style={{ fontSize: '2rem' }}>{template.template}</Card.Title>
                <Card.Text>
                    Cost: ${template.cost} <br></br>
                    <p style={{ margin: '10px 0px' }}>{template.problem_description}</p>
                </Card.Text>
                <ListGroup style={{ backgroundColor: "#333333", color: 'red' }}>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>CPU:</b> {partsDict["CPU"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>CASE:</b> {partsDict["CASE"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>CPU COOLER:</b> {partsDict["CPU_COOLER"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>MOTHERBOARD:</b> {partsDict["MOTHERBOARD"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>MEMORY:</b> {partsDict["MEMORY"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>STORAGE:</b> {partsDict["STORAGE"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>GPU:</b> {partsDict["GPU"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>POWER SUPPLY:</b> {partsDict["POWER_SUPPLY"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px' }}>
                        <h5>
                            <b>OPERATING SYSTEM:</b> {partsDict["OPERATING_SYSTEM"]} | &nbsp;
                            <Badge bg="primary">${costsDict["CPU"]}</ Badge>
                        </h5>
                    </ListGroup.Item>
                   
                </ListGroup>
                <Button


                    variant="primary"
                    size="lg"
                    style={{ padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px 0px'}}
                    onClick={() => routeChange(template["buildNum"])}>Customize</Button>
            </ Card.Body>
        </Card>
    );
}

function makeList(list) {
    return (
        <ul>
            {list.map((li) => (<li>{li}</li>))}
        </ul>
    );
}