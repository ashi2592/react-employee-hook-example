import { Segment, Grid} from "semantic-ui-react"
import DisplayStats from "./DisplayStats"

const DisplayEmployeeRecord = ({ InActive, Active }) => {
    return (<Segment>
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column style={{ textAlign: 'center' }}>
                    <DisplayStats title="Active" value={Active} color="green" size="tiny" />
                </Grid.Column>
                <Grid.Column style={{ textAlign: 'center' }}>
                    <DisplayStats title="In Active" value={InActive} color="red" size="tiny" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>)
}


export default DisplayEmployeeRecord;
