import { Form, Segment } from 'semantic-ui-react';
import EmployeeEntryFrom from './EntryForm';
import ButtonSaveAndCancel from './ButtonSaveAndCancel';

const NewEmployeesData = ({ addEmployee, setName, setStatus, name, status, resetEntry }) => {
    return (
        <Form  as={Segment}>
            <EmployeeEntryFrom
                name={name}
                status={status}
                setName={setName}
                setStatus={setStatus}
            />
            <ButtonSaveAndCancel addEmployee={addEmployee} 
            resetEntry = {resetEntry} 
            AddEntry={addEmployee}/>
        </Form>);
}
export default NewEmployeesData