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

    render() {
        console.log(this.context)
        return (
            <Fragment >

                <Card body inverse color="info"  >
                    <CardTitle >
                        User
                    </CardTitle>
                    <CardBody>
                        <div>First Name : {this.context.firstName}</div>
                        <div>Last Name : {this.context.lastName}</div>
                        <div>Email : {this.context.email}</div>
                    </CardBody>
                </Card>

            </Fragment>
        );
    }
}


export default Profile;