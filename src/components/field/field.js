import React from 'react'
import LanguageContext from '../../context/languageStore'
class Field extends React.Component {
    static contextType = LanguageContext
    render() {
        console.log(this.context.lan);

        return (
            <div className="ui fleld">
                <div>
                    SELECTED DATA IS :  {this.context.lan}
                </div>
                <label style={{ fontSize: '1.5rem' }}>
                    {this.context.lan === 'English' ? 'Description : ' : 'Omschrijving : '}
                </label>
                <input type="text" />
            </div>
        );
    }
}
export default Field