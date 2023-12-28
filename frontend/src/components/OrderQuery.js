import { useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { Badge } from "react-bootstrap";
import { useState } from "react";

export default function OrderQuery() {
    const [invalidBuild, setInvalidBuild] = useState(false);

    let navigate = useNavigate(); 
    

    function getBuild() {
        let num = document.getElementById("buildNumOS").value;
        if (num === "") {
            setInvalidBuild(true);
        } else {
            navigate(num);
        }
    }



    return (
        <div className='title'>
                <h1>Enter Build Number</h1>
                <Form.Control type = "number" id="buildNumOS" style={{marginTop: '20px', backgroundColor: "#333333", color: 'white'}} placeholder="7042" />
                {invalidBuild ? <Badge pill="true" bg="danger" style={{fontSize: '100%', marginTop: '20px'}}>No Record Found! Try again, or contact us for more help. </Badge> : <></>} 
                <br />
                <Button variant="primary" size="lg" style={{padding: '5px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', marginTop: '20px'}} onClick={() => getBuild()}>
                    Go
                </Button>
            </div>
    );
};
