import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    // Input,
    // Label,
    // Form,
    // FormGroup,
} from 'reactstrap';
// import PropTypes from 'prop-types';

function DeleteModal({ show, onDeleteclick, onCloseClick }) {
    // const { className } = props;
    const [modal, setModal] = useState(false);
    const [backdrop, setBackdrop] = useState(true);
    const [keyboard, setKeyboard] = useState(true);

    const toggle = () => setModal(!modal);

    // const changeBackdrop = (e) => {
    //     let { value } = e.target;
    //     if (value !== 'static') {
    //         value = JSON.parse(value);
    //     }
    //     setBackdrop(value);
    // };

    // const changeKeyboard = (e) => {
    //     setKeyboard(e.currentTarget.checked);
    // };

    return (
        <div>

            <Modal
                isOpen={show}
                toggle={onCloseClick}
                // className={className}
                backdrop={backdrop}
                keyboard={keyboard}
            >
                <ModalHeader toggle={toggle}>Data may be deleted</ModalHeader>
                <ModalBody>
                    Are you sure?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDeleteclick}>
                        Yes, delete it!
                    </Button>{' '}
                    <Button color="secondary" onClick={onCloseClick}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

// DeleteModal.propTypes = {
//     className: PropTypes.string,
// };

export default DeleteModal;