import React from 'react'
import store from 'store2';
const LanguageContext = React.createContext()

export class LanguageStoreContext extends React.Component {
    state={
        language : 'English',
    }
    onLanguageChange = language => {
        this.setState({
            language
        })
        store({lan: language})
    }
    render() {
        return (
            <div>
                <LanguageContext.Provider value= {{...store() , onLanguageChange : this.onLanguageChange }}>
                    {this.props.children}
                </LanguageContext.Provider>
            </div>

        );
    }
}

export default LanguageContext