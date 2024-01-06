import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Congrats.css';
function Congrats() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const modalHeader = {
    backgroundColor: '#333333',
    borderColor: '#333333',
    borderBlockColor: '#333333',
    color: 'white',
    border: '2px solid #ffffff'
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='cusetom-modal'
      >
        <div style={modalHeader}>
        <Modal.Header closeButton style={modalHeader}>
          <Modal.Title>Congratulations</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          Thank you for using BitBuilder! We've received your order. Using the contact information you provided, <b>we'll be in touch to set up a consulting session where we make sure this build
          will fit your needs and confirm pricing</b>. Feel free to make any changes to your build until your consulting session and update contact info as needed. <br />More
          info can be found under the 'Order Info' box. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"
          style={{background: '#8011ec', borderColor: '#8011ec'}}
          onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Congrats;