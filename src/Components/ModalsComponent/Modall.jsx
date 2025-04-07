
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modall({show, setShow, formList}) {
 

  const handleClose = () => setShow(false);
 

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preview Code</Modal.Title>
        </Modal.Header>
        <Modal.Body><pre>{formList.length? JSON.stringify(formList, null, 2) : "Empty"}</pre></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modall;