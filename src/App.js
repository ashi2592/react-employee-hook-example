
import './App.css';
import { Container, Divider } from 'semantic-ui-react';
import MainHeader from './component/employee/MainHeader'
import DisplayStats from './component/employee/DisplayStats'
import { useState, useEffect } from 'react';
import DisplayEmployeeRecord from './component/employee/DisplayRecord';
import NewEmployeesData from './component/employee/NewEmployee';
import EmployeeList from './component/employee/EmployeeList'
import { v4 as uuidv4 } from 'uuid';
import EditEmployeeModal from './component/employee/EditEmployee';
import { useSelector, useDispatch } from 'react-redux'
import { getEmployee } from './redux/selector';
import {
  loadEmployee,
  addEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction
} from './redux/employee/actions';


function App() {

  const dispatch = useDispatch()
  const [totalEmployee, setTotalEmployee] = useState(0);
  const [inActive, setInActive] = useState(0);
  const [active, setActive] = useState(0);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(false);
  const [id, setId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(loadEmployee())
  },[]);
 

  const addEmployee = () => {
    const payload = {
      id: uuidv4(),
      name,
      status
    }

    dispatch(addEmployeeAction(payload))
    resetEntry()
  }


  const editEmployee = (id) => {
    const Emplyoees = employee.filter(x => x.id === id);
    const currentEmp = Emplyoees.length ? Emplyoees[0] : null;
    if (currentEmp) {
      setStatus(currentEmp.status);
      setName(currentEmp.name);
      setId(id)
      setIsOpen(true);
    }
  }

  const deleteEmployee = (id) => {
    const payload = {
      id
    }
    dispatch(deleteEmployeeAction(payload))
  }

  const resetEntry = () => {
    setIsOpen(false);
    setStatus(false);
    setName('');
    setId('')
  }

  const updateEmployee = () => {
    const payload = {
      id,
      name,
      status
    }

    dispatch(editEmployeeAction(payload))
    resetEntry()
  }

  const employee = useSelector(state => getEmployee(state));

  useEffect(() => {
    let totalActive = 0;
    let totalInActive = 0;
    employee.map(x => {
      if (x.status) {
        totalActive += 1;
      } else {
        totalInActive += 1;
      }
      return x;
    })
    setTotalEmployee(totalActive + totalInActive)
    setInActive(totalInActive)
    setActive(totalActive)
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [employee, isOpen])






  return (
    <Container>
      <MainHeader size="h1" title="Employee Dashboard" />
      <DisplayStats title="Total Employee" value={totalEmployee} color="black" size="small" />
      <DisplayEmployeeRecord InActive={inActive} Active={active}></DisplayEmployeeRecord>
      <Divider />
      <EmployeeList employee={employee} editEmployee={editEmployee} deleteEmployee={deleteEmployee} />
      <Divider />
      <MainHeader size="h3" title="Add Employee" align="left" />
      <NewEmployeesData addEmployee={addEmployee} setName={setName} setStatus={setStatus} name={name} status={status} resetEntry={resetEntry} />
      <EditEmployeeModal isOpen={isOpen} setName={setName} setStatus={setStatus} name={name} status={status} resetEntry={resetEntry} updateEmployee={updateEmployee} ></EditEmployeeModal>
    </Container >
  );
}

export default App;
