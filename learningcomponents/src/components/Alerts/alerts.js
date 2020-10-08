import React ,{Component} from 'react';
import  {Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class TAlerts extends Component{
    render(){
        return(
            <div>
                <Alert color="primary">
                    This is ths primary alert 
                </Alert>
                <Alert color="danger"> 
                    This is the danger alert
                </Alert>
                <Alert color="warning">
                    This is the warning alert
                </Alert>
                <Alert color="secondary"> 
                    This is the secondary alert
                </Alert>
                <Alert color="info"> 
                    This is the info
                </Alert>    
                <Alert color="light"> 
                    This is the Light
                </Alert>
                <Alert color="dark"> 
                    This is the dark
                </Alert>
            </div>
        )
    }
}

export default TAlerts;