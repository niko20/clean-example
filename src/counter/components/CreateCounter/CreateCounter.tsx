import { Button, Modal, NavigationBar } from '@cornershop/chirimoya-react';

const CreateCounter = ({ visible, closeOverlay }: any) => {
  return (
    <Modal isVisible={visible} size="large" closable={false}>
      <Modal.Header>
        <NavigationBar>
          <NavigationBar.Leading>
            <span> Title</span>
          </NavigationBar.Leading>
          <NavigationBar.Trailing>
            <span>Action</span>
          </NavigationBar.Trailing>
          <NavigationBar.Trailing>
            <Button variant="bordered" role="primary" onClick={closeOverlay}>
              Close
            </Button>
          </NavigationBar.Trailing>
        </NavigationBar>
      </Modal.Header>
      <Modal.Body>This is an example of modal</Modal.Body>
    </Modal>
  );
};

export default CreateCounter;
