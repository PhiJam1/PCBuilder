import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export default function HomePageLoginPrompt() {
    return (
        <div className="hpLoginPrompt"> 
            <h1> Login For The Best Experience </h1> 
            <p> <Badge bg="secondary" style={{padding: '10px 10px', fontSize: '1rem'}} >Only required to saved an unfinished build </Badge> </p>
            <Button variant="primary" size="lg"style={{padding: '10px 20px', fontSize: '2rem', background: '#8011ec', borderColor: '#8011ec'}}> Login </Button>{' '}
            
        </div>
    );
};
