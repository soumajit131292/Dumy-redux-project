import React, { Component } from "react";
import { getUserData } from '../navbar/service/navbarService'
import { withRouter } from 'react-router-dom';
import Contexts from '../../context/UserDataAfterLogin'
import Profile from '../userProfile/profile'
import {
   Collapse,
   Navbar,
   Nav,
   UncontrolledDropdown,
   DropdownToggle,

} from "reactstrap";

import {
   User,
} from "react-feather";


class ThemeNavbar extends Component {
  
   constructor(props) {
      super(props); 
      this.state = {
         isOpen: false,
         userDetails: '',
         showPro: false
      };
   }
  
   componentDidMount() {
      this.getUserDetails();

   }
   getUserDetails = () => {
      getUserData().then(userData => {
         this.setState({
            userDetails: userData,
         });
      })

   }


   openDashboard = () => {
      this.props.history.push("/")
   }
   openProfile = () => {
      this.setState({
         showPro: !this.state.showPro
      })

   }

   render() {
      var { userprofile } = this.props;
      const { showPro } = this.state;
      if (showPro) {
         userprofile = (
            <div style={{ paddingTop: '12rem' }}>

               <Contexts.Provider value={this.state.userDetails} >
                  <Profile />
               </Contexts.Provider>

            </div>
         )
      }
      return (
         <div  >

            <Navbar className="navbar navbar-expand-lg navbar-light bg-faded">
               <div className="container-fluid px-0" >
                  <div className="navbar-header">
                     <div style={{ color: 'white' }}>
                        Hi , {this.state.userDetails.firstName}
                     </div>

                  </div>
                  <div className="appbar-buttons">
                     <div className="navbar-container-1">

                        <Collapse isOpen={this.state.isOpen} navbar>
                           <Nav className="ml-auto float-right" navbar style={{ margin: 0 }}>

                              <UncontrolledDropdown nav inNavbar className="pr-1">
                              
                                 <DropdownToggle nav onClick={this.openProfile} >
                                       <User size={30} style={{ color: 'white' }} />                                 
                                    {userprofile}
                                 </DropdownToggle>
                                
                              </UncontrolledDropdown>
                              
                           </Nav>
                        </Collapse>
                     </div>


                  </div>
               </div>
            </Navbar>
         </div>
      );
   }
}
export default withRouter(ThemeNavbar);
