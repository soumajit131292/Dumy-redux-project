import React from 'react'
import LanguageContext from '../../context/languageStore'
class Field extends React.Component {
    static contextType = LanguageContext
    render() {
        
        return (
            <div className="ui fleld">
                <label style={{ fontSize: '1.5rem' }}>
                    {this.context.language === 'English' ? 'Description : ' : 'Omschrijving : '}
                </label>
                <input type="text" />
            </div>
        );
    }
}
export default Field