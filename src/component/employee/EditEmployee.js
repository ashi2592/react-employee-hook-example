import EmployeeEntryFrom from "./EntryForm";
import { Modal, Segment, Button, Form } from "semantic-ui-react";

const EditEmployeeModal = ({ isOpen,name, status, setName, setStatus, resetEntry, updateEmployee }) => {
    return (<Modal open={isOpen} >
        <Modal.Header>Edit Employee Information</Modal.Header>
        <Modal.Content>
            <Form as={Segment}>
                <EmployeeEntryFrom
                    name={name}
                    status={status}
                    setName={setName}
                    setStatus={setStatus}
                />
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button.Group>
                <Button primary onClick={() => updateEmployee()}>Ok</Button>
                <Button.Or />
                <Button onClick={() => resetEntry()}>Cancel</Button>
            </Button.Group>
        </Modal.Actions>
    </Modal>);
}

export default EditEmployeeModal;