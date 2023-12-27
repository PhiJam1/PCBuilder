import TemplateBuilds from "../components/PCTemplates";
import "./../pages/PcBuilderPage.css";

import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FormLabel } from "react-bootstrap";


export default function ContinueOptions() {
    let navigate = useNavigate(); 
    function routeChange(buildNumber) { 
        let path = `/Order_Status/` + buildNumber; 
        navigate(path);
    }
    return (
        <Form>
            <Row>
                <Col xs={5}>
                    You can also 
                    <Button variant="primary" size="lg" style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}} onClick={() => routeChange("")}>
                        Start from Scratch
                    </Button>
                </Col>
                <Col>
                Or
                    <Form.Control placeholder="Enter your build number" />
                    <Button variant="primary" size="lg" style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}} onClick={() => routeChange("33")}>
                        Go
                    </Button>
                </Col>
                
            </Row>
      </Form>
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