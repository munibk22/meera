import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { render } from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modals2() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 class="form-signin-heading">Please sign in</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: "100%", height: "300px" }}>
                    {/* <LoginForm /> */}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
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

// render(<Modals2 />);