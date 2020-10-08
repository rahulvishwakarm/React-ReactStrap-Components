import React from 'react';
import {Badge,Button} from 'reactstrap';

const Notify=(props)=>{
    return(
        <div>
            <Button color="primary" outline> 
                Notification <Badge color="secondary">4</Badge>
            </Button>
        </div>
    )
}

export default Notify;