import TemplateBuilds from "../components/PCTemplates";
import "./PcBuilderPage.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";

export const PcBuilderPage = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/Order_Status/`; 
        navigate(path);
    }
    return ( // this stuff is JSX
        <div className="full">
            {/* <h1> PC Builder Pages </h1> */}
            <h1>Choose a template to start with</h1>
            <TemplateBuilds />
            <hr></hr>
            <h1>You can also <Button 
            variant="primary"
            size="lg"
            style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}}
            onClick={routeChange}>Start from Scratch</Button></h1>
        </div>
    );
}