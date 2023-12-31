import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './../pages/HomePage.css';
import { useNavigate } from "react-router-dom";


export default function HomePageDSBTN() {
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/Design_Studio/`; 
        navigate(path);
    }

    return (
        <div className="top-btn-block"> 
            <h1> Hop In The Design Studio</h1> 
            <p> <Badge bg="secondary" style={{padding: '10px 10px', fontSize: '1rem'}} >Sketch out your dream PC with expert advice </Badge> </p>
            <Button 
                variant="primary"
                size="lg"
                style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec'}}
                onClick={routeChange} > 
                Design Studio 
            </Button>{' '}
            
        </div>
    );
};
