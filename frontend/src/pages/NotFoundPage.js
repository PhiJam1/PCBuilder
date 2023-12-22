import './NotFoundPage.css';
import Badge from 'react-bootstrap/Badge';


export const NotFoundPage = () => {
    return ( // this stuff is JSX
    <div className="full">
        <div className='text'>
            <h1 style={{fontSize: '3rem'}}> Well you must be Dora because this is uncharted territory. </h1>
            <p style={{fontSize: '2rem'}}> We're not sure how you got here, but 'here' doesn't exist! </p>
            <p style={{fontSize: '3rem'}}> <Badge bg="danger">Error 404 - Page Not Found </Badge></p>
        </div>
    </div>

    );
}