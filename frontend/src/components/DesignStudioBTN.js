import Button from 'react-bootstrap/Button';

export const DesignStudioBTN = () => {
    return (
        <div className="mb-2" style={{justifyContent: 'center', alignItems: 'center'}}>
            <h1>Hop into the Design Studio</h1>
            <p>Dream up your PC and we'll bring it to your doorstep (i think)</p>
            <Button variant="primary" size="lg">
                Design Studio
              </Button>{' '}
        </div>
    );
}