import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav className="nav">
                <span>Cart: {props.totalCounters} item(s)</span>
                <a className="nav-link active" aria-current="page" href="#">Active</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </nav>
        </React.Fragment>          
    );
}

/*
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="nav">
                    <span>Cart: {this.props.totalCounters} item(s)</span>
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </nav>
            </React.Fragment>
        );
    }
}
*/ 

export default NavBar;