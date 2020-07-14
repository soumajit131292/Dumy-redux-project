import React, { Component, Fragment } from "react";
import Contexts from '../../context/UserDataAfterLogin'
import {
    Row,
    Col,
    Button,
    Card,
} from "reactstrap";

import photo14 from "../../assets/img/photos/14.jpg";

class Profi extends Component {

    static contextType = Contexts

    render() {
        return (
            <Fragment>
                <div className="row align-items-center page-header-container">
                    <div className="col page-header-name">
                        User Profile
                    </div>
                </div>

                <Row>
                    <Col xs="12" id="user-profile">
                        <Card className="profile-with-cover">
                            <div
                                className="card-img-top img-fluid bg-cover height-300"
                                style={{ background: `url("${photo14}") 50%` }}
                            />
                            <Row className="media profil-cover-details">
                                <Col xs="5">
                                    <div className="align-self-start halfway-fab pl-3 pt-2">
                                        <div className="text-left">
                                            <h3 className="card-title text-white">{this.context.firstName} {this.context.lastName}</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="2">
                                    <div className="align-self-center halfway-fab text-center">

                                    </div>
                                </Col>
                                <Col xs="5">
                                    <div className="profile-cover-buttons">
                                        <div className="media-body halfway-fab align-self-end">
                                            <div className="text-right d-none d-sm-none d-md-none d-lg-block">
                                               
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <div className="profile-section">
                                    <Row>

                                        <Row lg="2" md="2" style={{ paddingLeft: '53rem' }}>
                                            <span className="font-medium-4 text-uppercase">{this.context.firstName} {this.context.lastName}</span>

                                        </Row>


                                        <Row lg="2" md="2" style={{ paddingLeft: '53rem' }}>
                                            <span className="grey font-medium-3 text-lowercase">{this.context.email}</span>
                                        </Row>
                                    </Row>
                                </div>
                            </Row>
                        </Card>
                    </Col>
                </Row>

            </Fragment>
        );

    }
}


export default Profi;