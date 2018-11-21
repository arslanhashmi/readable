import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

function ConfirmModal (props) {
  const {
    modalTitle,
    modalDescription,
    modalOpen,
    handleModalOpen,
    handleModalCancel,
    handleDeletion
  } = props;
  return (
    <Modal
      trigger={
        <Button
          icon="trash"
          content="Delete"
          onClick={handleModalOpen}
        />
      }
      open={modalOpen}
      onClose={handleModalCancel}
    >
      <Modal.Header>{modalTitle}</Modal.Header>
      <Modal.Content>
        {modalDescription}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleDeletion}>Delete</Button>
        <Button onClick={handleModalCancel}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ConfirmModal
