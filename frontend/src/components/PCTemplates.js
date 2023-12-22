import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import './../pages/PcBuilderPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// this should be something we fetch from the backend
const builds = [
    {
        name: "Workstation heavy study",
        image: "./../Images/HomePageIm1.jpg",
        cost: 2000.10,
        pros: [
            "Cheap",
            "Small"
        ],
        cons: [
            "black"
        ],
        parts_list: [
            "case 1",
            "gpu 1",
            "cpu 1",
            "Intel 1"
        ],
        finished: true,
    },
    {
        name: "Gaming",
        image: "./../Images/HomePageIm1.jpg",
        cost: 3000.00,
        pros: [
            "Colorful",
            "Small"
        ],
        cons: [
            "Expensive"
        ],
        parts_list: [
            "case 2",
            "gpu 2",
            "cpu 2",
            "Intel 2"
        ],
        finished: true,
    },
    {
        name: "School",
        cost: 1000.00,
        image: "./../Images/HomePageIm1.jpg",
        pros: [
            "Cheap",
            "Small"
        ],
        cons: [
            "Slow"
        ],
        parts_list: [
            "case 3",
            "none",
            "cpu 3",
            "Intel 3"
        ],
        finished: true,
    },
    {
        name: "School",
        cost: 1000.00,
        image: "./../Images/HomePageIm1.jpg",
        pros: [
            "Cheap",
            "Small"
        ],
        cons: [
            "Slow"
        ],
        parts_list: [
            "case 3",
            "none",
            "cpu 3",
            "Intel 3"
        ],
        finished: true,
    },
    {
        name: "School",
        cost: 1000.00,
        image: "./../Images/HomePageIm1.jpg",
        pros: [
            "Cheap",
            "Small"
        ],
        cons: [
            "Slow"
        ],
        parts_list: [
            "case 3",
            "none",
            "cpu 3",
            "Intel 3"
        ],
        finished: true,
    },
    {
        name: "School",
        cost: 1000.00,
        image: "./../Images/HomePageIm1.jpg",
        pros: [
            "Cheap",
            "Small"
        ],
        cons: [
            "Slow"
        ],
        parts_list: [
            "case 3",
            "none",
            "cpu 3",
            "Intel 3"
        ],
        finished: true,
    },
    {
        name: "School",
        cost: 1000.00,
        image: "./../Images/HomePageIm1.jpg",
        pros: [
            "Cheap",
            "Small"
        ],
        cons: [
            "Slow"
        ],
        parts_list: [
            "case 3",
            "none",
            "cpu 3",
            "Intel 3"
        ],
        finished: true,
    }
]

export default function TemplateBuilds() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/Order_Status/`; 
        navigate(path);
    }
    return (
        <div className='full-card'>
                {builds.map((build) =>  (
                    makeCard(build, routeChange)                 
                ))}
         </div>
    );
};




function makeCard(build, routeChange) {
    
    return (
        <Card style={{ width: '20rem', padding: '20px', margin: '20px', backgroundColor: "#333333", color: 'white'}}>
          <Card.Body>
            <Card.Title style={{fontSize: '2rem'}}>{build.name}</Card.Title>
            <Card.Text>
              Cost: ${build.cost} <br></br>
              Pros: {makeList(build.pros)}
              Cons: {makeList(build.cons)}
            </Card.Text>
            <ListGroup style={{ backgroundColor: "#333333", color: 'red'}}>
                <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>Case: {build.parts_list[0]}</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>GPU: {build.parts_list[1]}</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>CPU: {build.parts_list[2]}</ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "#333333", color: 'white', padding: '10px'}}>Processor: {build.parts_list[3]}</ListGroup.Item>
            </ListGroup>
            <Button 
            variant="primary"
            size="lg"
            style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec', margin: '20px'}}
            onClick={routeChange}>Customize</Button>
          </ Card.Body>
        </Card>
      );
}

function makeList(list){
    return (
        <ul>
            {list.map((li) => (<li>{li}</li>))}
        </ul>
    );
}