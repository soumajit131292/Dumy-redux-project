import React from 'react'
import { CardBody } from "reactstrap";
import ReactTooltip from 'react-tooltip';
import LanguageContext from '../../context/languageStore'
class LanguageSelector extends React.Component {
    static contextType = LanguageContext
    render() {
        console.log(this.context.language);     
        return (
            <div>
                    <CardBody style={{ fontSize: '1.4rem' }}>
                        select a language :
                        <span data-tip="English" >
                            <i className="flag us" onClick={() => this.context.onLanguageChange('English')}></i>
                        </span>
                        <ReactTooltip place="bottom" />
                        <span data-tip="Dutch" >
                            <i className="flag nl" onClick={() => this.context.onLanguageChange('Dutch')}></i>
                        </span>
                        <ReactTooltip place="bottom" />
                    </CardBody>   
            </div>
        );
    }
}
export default LanguageSelector