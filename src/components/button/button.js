import React from 'react'
import LanguageContext from '../../context/languageStore'
class Button extends React.Component {
    static contextType = LanguageContext
    render() {
        return (
            <div>
                <button type="submit" color="danger" block="true" className="btn-pink btn-raised" >
                {this.context.lan === 'English' ? 'Create  ' : 'Creëer  '}
                 </button>
            </div>
        );
    }
}
export default Button