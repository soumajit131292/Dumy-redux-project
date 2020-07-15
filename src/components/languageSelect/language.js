import React, {  Fragment } from "react";
import LanguageContext from '../../context/languageStore'
import { Card, CardBody } from "reactstrap";
export default class Language extends React.Component {
    static contextType = LanguageContext
    
    render() {
        console.log(this.context.lan)
        return (
            <Fragment>
            <Card >
                <CardBody>
                </CardBody>
                {this.context.lan}
            </Card>
        </Fragment>
        )
    }
}
