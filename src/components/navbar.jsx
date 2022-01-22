import React, { Component } from 'react';

// stateless function component     simple writng code that return rather then rendering
const Navbar = ({totalCounters}) => {
    return (
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
        Navbar{" "}
     <span className="badge badge-pill badge-secondary">
         { totalCounters}
         </span>
    </a>
</nav>
);
};
// class NavBar extends Component {
//         render() { 
    //     return (<nav className="navbar navbar-light bg-light">
    //       <a className="navbar-brand" href="#">Navbar</a>
    //       Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
    //   </nav>);
//     }
// }
 
export default Navbar;