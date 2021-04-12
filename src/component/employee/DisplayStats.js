import { Statistic } from "semantic-ui-react";

const DisplayStats = ({title, value, size="small" ,color="green",style={}}) => {
    return (<Statistic size={size} color={color} >
        <Statistic.Label style={style} >{title}</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
    </Statistic>);
}

export default DisplayStats;