import { Button } from "semantic-ui-react";
const ButtonSaveAndCancel = ({resetEntry,AddEntry}) => {
    return (<Button.Group>
        <Button primary onClick={()=>AddEntry()}>Ok</Button>
        <Button.Or />
        <Button onClick={()=>resetEntry()} >Cancel</Button>
    </Button.Group>
    );
}

export default ButtonSaveAndCancel;