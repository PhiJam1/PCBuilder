import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function HomePageLoginPrompt() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/Order_Status/`; 
        navigate(path);
    }
    return (
        <div className="top-btn-block"> 
            <h1> Check For an Order Update </h1> 
            <p> <Badge bg="secondary" style={{padding: '10px 10px', fontSize: '1rem'}} >Or continue with an unfinished build </Badge> </p>
            < Button 
                style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec'}}
                variant="primary" 
                size="lg" 
                onClick={routeChange} > 
                Order Status 
            </Button>{' '}
            
        </div>
    );
};
