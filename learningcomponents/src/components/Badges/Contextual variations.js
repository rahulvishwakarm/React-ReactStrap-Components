import React from 'react';
import {Badge} from 'reactstrap';

const ConstVariation = (props) =>{
    return(
        <div>
            <Badge color="primary">primary</Badge>
            <Badge color="secondary">secondaruy</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="dark">dark</Badge>
            <Badge color="light" >Light</Badge>
        </div>
    )
}

export default ConstVariation;