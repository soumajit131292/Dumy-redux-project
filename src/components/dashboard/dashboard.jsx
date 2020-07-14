import React, { Component, Fragment } from "react";
import { Card, CardText, CardBody, CardHeader, CardGroup } from "reactstrap";
import LanguageSelector from '../languageSelecter/languageSelector'
import Note from '../userNote/note'
import { LanguageStoreContext } from '../../context/languageStore'
import Contexts from '../../context/UserDataAfterLogin'
class DaasDashboard extends Component {

    static contextType = Contexts
    render() {
        console.log(this.context)
        return (
            <Fragment>
                <div className="col page-header-name">
                </div>
                <Card body className="text-center" inverse style={{ backgroundColor: '#1d1a38', borderColor: '#333' }}>
                    <CardBody>
                        <CardText tag="h4">welcome {this.context.firstName}</CardText>
                    </CardBody>
                    <CardBody>
                        <CardText tag="h4">This is dummy redux project</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <LanguageStoreContext>
                        <LanguageSelector />
                        <CardBody>
                            <Note />
                        </CardBody>
                    </LanguageStoreContext>
                </Card>

            </Fragment>
        );
    }
}

export default DaasDashboard;
