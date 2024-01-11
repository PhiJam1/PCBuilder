import TemplateBuilds from "../components/PCTemplates";
import "./../pages/PcBuilderPage.css";

import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Badge, FormLabel } from "react-bootstrap";
import { useState } from "react";
import { BACKEND } from "../pages/constants";

export default function ContinueOptions() {


  let navigate = useNavigate();
  const routeChange = async (buildNum) => {
    if (buildNum === "") { // start from scratch
      // make a new build registered with the backend
        try {
            const response = await fetch(BACKEND + '/register_build/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                // Add any additional headers here
              },
              body: JSON.stringify({"templateBuildNum": 0}) // will be 0 for a start from scratch
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
    } else {
      // check to see if this is a valid build 
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
          throw new Error('Network response was not ok');
        }
  
        const responseData = await response.json();
        if (responseData["valid"]) {
          navigate("/Design_Studio/" + buildNum);
        } else {
          setInvalidBuild(true);
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    }
  }


    const [invalidBuild, setInvalidBuild] = useState(false);
    function GetBuildNumRequest() {
      let num = document.getElementById("buildNumCO").value;
      // check to see if this build number exists
      // if it does, redirect to build page. otherwise output an error msg
      if (num != "") {
        routeChange(num);
      } else {
        setInvalidBuild(true);
      }
    }
    return (
        
            <Row>
                <Col xs={6}>
                    You can also
                    <Button variant="primary" size="lg" 
                    style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}} 
                    onClick={() => routeChange("")}>
                        Start from Scratch
                    </Button>
                </Col>
                <Col style={{marginLeft: '20px'}}>
                Or, Continue with a previous build

                  <Form.Control type = "number" id="buildNumCO" style={{marginTop: '20px', backgroundColor: "#333333", color: 'white'}} placeholder="Enter your build number" />
                  
                  
                      
                  
                  <Button variant="primary" size="lg" style={{padding: '5px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', marginTop: '20px'}} onClick={() => GetBuildNumRequest()}>
                      Go
                  </Button>
                  {invalidBuild ? <Badge pill="true" bg="danger" style={{fontSize: '45%', marginLeft: '20px'}}>No Record Found! Try again, or contact us for more help. </Badge> : <></>}

                </Col>
            </Row>
      
    )
}


function GridColSizesExample() {
    return (
      <Form>
        <Row>
          <Col xs={2}>
          <Form.Control placeholder="State" />

          </Col>
          <Col>
          <Form.Control placeholder="State" />
          </Col>
          <Col>
            <Form.Control placeholder="Zip" />
          </Col>
        </Row>
      </Form>
    );
  }



//   You can also 
//   <Button variant="primary" size="lg" style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}} onClick={() => routeChange("")}>
//       Start from Scratch
//   </Button>

//   <Button variant="primary" size="lg" style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}} onClick={() => routeChange("33")}>
//       Go
//   </Button>