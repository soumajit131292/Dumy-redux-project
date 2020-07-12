// import external modules
import React, { PureComponent } from "react";

// import internal(own) modules
import Navbar from "../components/navbar/navbar";

class MainLayout extends PureComponent {


   render() {
      return (
         <div>
            <div>
               <Navbar />
            </div>
            <main style={{ paddingTop: '0.7rem' }}>{this.props.children}</main>
         </div>
      );
   }
}

export default MainLayout;
