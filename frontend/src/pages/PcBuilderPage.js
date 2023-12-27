import TemplateBuilds from "../components/PCTemplates";
import "./PcBuilderPage.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContinueOptions from "../components/DSContinueOptions";
export const PcBuilderPage = () => {
    
    return ( // this stuff is JSX
        <div className="full" >
            {/* <h1> PC Builder Pages </h1> */}
            <h1>Choose a template to start with</h1>
            <TemplateBuilds />
            <hr></hr>
            <h1>
                <ContinueOptions />
            </h1>
        </div>
    );
}