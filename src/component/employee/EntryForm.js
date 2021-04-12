import { Form } from 'semantic-ui-react';

const EmployeeEntryFrom = ({name,status,setName,setStatus}) => {
    return (
        <Form.Group>
                <Form.Input
                    type="input"
                    placeholder="Enter Name"
                    label="Employee's Name"
                    value={name}
                    width={9}

                    onChange={(event) => { setName(event.target.value) }}
                />

                <Form.Input
                    type="checkbox"
                    label="Employee's Status"
                    checked={status}
                    width={4}
                    onChange={(event) => { setStatus(event.target.checked) }}
                />
            </Form.Group>
    );
}

export default EmployeeEntryFrom;


