import React, { Component, Fragment } from "react";
import {
    CardHeader,
    Card,
    CardBody,
    
    CardTitle
} from "reactstrap";
import UserDataAfterLogin from '../../context/UserDataAfterLogin'

class Profile extends Component {

    static contextType = UserDataAfterLogin;

    constructor() {
        super();

        this.state = {
            userFirstName: '',
            userLastName: '',
            userProfileImage: '',
            userEmail: '',
            role: '',
            isOpen: false,
        };
    }

    render() {
       
        return (
            <Fragment >

                <Card body inverse color="info"  >
                    <CardTitle >
                        User             
                    </CardTitle>
                    <CardBody>
                           <div>First Name : {this.context.firstName}</div> 
                           <div>Last Name : {this.context.lastName}</div>
                    </CardBody>

                </Card>

            </Fragment>
        );
    }
}


export default Profile;