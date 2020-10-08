import React from 'react';
import { Badge } from 'reactstrap';

const Pills = (props)=>{
    return(
        <div>
            <Badge href="#" color="primary" pill>primary</Badge>
            <Badge href="#" color="secondary" pill>secondaruy</Badge>
            <Badge href="#" color="success" pill>Success</Badge>
            <Badge href="#" color="danger" pill>Danger</Badge>
            <Badge href="#" color="warning" pill>Warning</Badge>
            <Badge href="#" color="dark" pill>dark</Badge>
            <Badge href="#" color="light" pill>Light</Badge>
        </div>
    )
}

export default Pills;