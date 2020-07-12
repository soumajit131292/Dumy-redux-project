import React from 'react'
const LanguageContext = React.createContext()

export class LanguageStoreContext extends React.Component {
    state={
        language : 'English',
    }
    onLanguageChange = language => {
        this.setState({
            language
        })
    }
    render() {
        return (
            <div>
                <LanguageContext.Provider value= {{...this.state , onLanguageChange : this.onLanguageChange }}>
                    {this.props.children}
                </LanguageContext.Provider>
            </div>

        );
    }
}

export default LanguageContext