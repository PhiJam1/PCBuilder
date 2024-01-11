import { useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { Badge } from "react-bootstrap";
import { useState } from "react";
import { BACKEND } from "../pages/constants";

export default function OrderQuery() {
    const [invalidBuild, setInvalidBuild] = useState(false);

    let navigate = useNavigate(); 
    

    async function getBuild() {
        let buildNum = document.getElementById("buildNumOS").value;
        if (buildNum === "") {
            setInvalidBuild(true);
            return;
        }

        try {
            const response = await fetch(`${BACKEND}/valid_build_num/?buildNum=${buildNum}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                // Add any additional headers here
              },
              // body: JSON.stringify({"buildNum": buildNum}) // will be 0 for a start from scratch
            });
      
            if (!response.ok) {
              navigate("/error/");
              throw new Error('Network response was not ok');
            }
      
            const responseData = await response.json();
            if (responseData["valid"]) {
              navigate(buildNum);
            } else {
              setInvalidBuild(true);
            }
          } catch (error) {
            console.error('Error making POST request:', error);
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
