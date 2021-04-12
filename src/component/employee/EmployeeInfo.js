import { Segment, Grid, Icon } from "semantic-ui-react";

const Coloumstyle = { textAlign: 'center' };

const EmployeeInfo = ({ color = "green", size = "tiny", id, name, editEmployee, deleteEmployee, isHeader = false }) => {
    return (<Segment color={color} size={size}>
        <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column style={Coloumstyle}>
                    {id}
                </Grid.Column>
                <Grid.Column style={Coloumstyle}>
                    {name}
                </Grid.Column>

                {!isHeader && <Grid.Column style={Coloumstyle}>
                    <Icon name="edit" onClick={() => editEmployee(id)}></Icon>
                    <Icon name="trash" onClick={() => deleteEmployee(id)}></Icon>
                </Grid.Column>}
                {isHeader && <Grid.Column style={Coloumstyle}>
                    Actions
                </Grid.Column>}
            </Grid.Row>
        </Grid>

    </Segment>);
}

export default EmployeeInfo;