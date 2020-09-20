import React from "react";
import { Modal, Button } from "react-bootstrap";

function AppModal(props) {
  const { showModal, showModalScreen, userInfo, userPosts } = props;

  return (
    <Modal
      show={showModalScreen}
      onHide={(e) => showModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title>{userInfo?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {userPosts?.map((post, i) => (
          <p key={i} className="post">{post.title}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => showModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppModal;
