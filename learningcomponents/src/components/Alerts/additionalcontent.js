import React ,{Component} from 'react';
import  {Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class AdditionalAlerts extends Component{
    render(){
        return(
            <div>
                <Alert color="success">
                    <h4 className="alert-heading">Well Done!</h4>
                    <p>
                        Keep Learning you are doing the right task please contiinue to study and take the most out of it
                        Do the work as hard as possible
                    </p>
                    <p className="mb-0">
                        You are started the thing which will keep on the top of the world, please keep going and donot stop
                        unless you get your goal
                    </p>
                </Alert>
            </div>
        )
    }
}

export default AdditionalAlerts;