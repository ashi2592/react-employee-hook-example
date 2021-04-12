
const employee = [{
    id: 1,
    name: "Ashish",
    status: true
}]

export const getEmployeeData = () => {
    return employee;
}

export const addEmployeeData = (data) => {
    return employee.concat(data)
}

export const updateEmployeeData = (data) => {
    const { id,name, status } = data;
    const index = employee.findIndex(x => x.id === id);
    let newemployee = employee;

    if(index > -1){
        newemployee[index].name = name;
        newemployee[index].status = status;
    }



     return newemployee
}

export const deleteEmployeeData = (data) => {
    const { id } = data;
    const newemployee = employee.filter(x => x.id !== id)
    return newemployee;
}