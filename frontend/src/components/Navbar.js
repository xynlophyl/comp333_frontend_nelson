import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { PropTypes } from 'prop-types';
import { render } from 'react-dom';
import { logout } from '../actions/auth';

/* function NavigationBar() {
    propTypes = {
        auth: propTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render(); {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div>
                <span>
                    <strong>
                        {user ? `Welcome ${user.username}` : ""}
                    </strong>
                </span>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
            

        const guestLinks = (
            <div>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/createaccount">Sign Up</Nav.Link>
            </div>
        )
        return (
            <div className="App">
                <Navbar className="navbar" >
                    <Navbar.Brand href="#home">R8 UR MUSIC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbartitle">
                            <Nav.Link href="/">Home</Nav.Link>
                            {isAuthenticated ? authLinks : guestLinks}

                            <Nav.Link href="/music">Songs</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(NavigationBar);
*/


export class NavigationBar extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div>
                <span>
                    <strong>
                        {user ? `Welcome ${user.username}` : ""}
                    </strong>
                </span>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
            

        const guestLinks = (
            <div>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/createaccount">Sign Up</Nav.Link>
            </div>
        )
        return (
            <div className="App">
                <Navbar className="navbar" >
                    <Navbar.Brand href="#home">R8 UR MUSIC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbartitle">
                            <Nav.Link href="/">Home</Nav.Link>
                            {isAuthenticated ? authLinks : guestLinks}

                            <Nav.Link href="/music">Songs</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(NavigationBar);
