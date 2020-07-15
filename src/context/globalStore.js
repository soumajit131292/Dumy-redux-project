import React from 'react'
import Contexts from '../context/UserDataAfterLogin'
import { getUserData } from '../components/navbar/service/navbarService'
export default class GlobalStore extends React.Component {
    state = {
        userDetails: []
    }
    componentDidMount() {
        getUserData().then(userData => {
            this.setState({
                userDetails: userData,
            });
        })
    }
    render() {
        return (
            <Contexts.Provider value={this.state.userDetails}>
                {this.props.children}
            </Contexts.Provider>
        );
    }
}