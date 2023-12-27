import React from 'react';

import TemplateBuilds from "../components/PCTemplates";
import "./BuildPage.css";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { PartsTable } from '../components/PartsTable';
import { Badge } from 'react-bootstrap';
export const BuildPage = () => {
    const { buildNum } = useParams();
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "/Order_Status/" + buildNum; 
        navigate(path);
    }
    return ( // this stuff is JSX
        <div className="full">
            <div className = "top-right">
                <Button 
                variant="primary "
                size="lg"
                style={{padding: '10px 20px', fontSize: '1.5rem', background: '#8011ec', borderColor: '#8011ec', marginTop: '20px'}}
                onClick={() => routeChange()}>Finish</Button>    
            </div>
            <h1>Customize Your New PC</h1>
            <h2>
                Your build number: {buildNum}
                <Badge pill bg="warning" style={{marginLeft: '20px'}}>Important</Badge> 
            </h2>
            
            <hr></hr>
            
            <PartsTable buildNum={buildNum}/>
        </div>
    );
}