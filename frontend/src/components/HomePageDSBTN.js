import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './../pages/HomePage.css';


export default function HomePageDSBTN() {
    return (
        <div className="hpLoginPrompt"> 
            <h1> Hop In The Design Studio</h1> 
            <p> <Badge bg="secondary" style={{padding: '10px 10px', fontSize: '1rem'}} >Sketch out your dream PC with expert advice </Badge> </p>
            <Button variant="primary" size="lg"style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec'}}> Design Studio </Button>{' '}
            
        </div>
    );
};
