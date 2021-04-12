import EmployeeInfo from "./EmployeeInfo";
import { Container } from "semantic-ui-react";
import MainHeader from "./MainHeader";

const EmployeeList = ({ employee, editEmployee, deleteEmployee }) => {
    return (
        <Container>
            {employee.length > 0 &&
                (<><MainHeader size="h3" title="Employee list" align={"left"} />
                    <EmployeeInfo
                        color="black"
                        id={"ID"}
                        name={"Employee Name"}
                        isHeader={true}
                    /></>)}
            {employee.length > 0 && employee.map((x,index) => <EmployeeInfo
                key={index}
                color={x.status ? "green" : "red"}
                id={x.id}
                name={x.name}
                editEmployee={editEmployee}
                deleteEmployee={deleteEmployee}
            />
            )}
        </Container>
    );
}

export default EmployeeList;