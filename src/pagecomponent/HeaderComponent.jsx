import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class HeaderComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div >
                <header >
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a className="navbar-brand" href="#">Navigation</a>

                        

                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                      
                        <div className="dropdown form-inline my-0 my-lg-1">

                            <p className="dropdown-toggle" data-toggle="dropdown" style={{ color: "white", marginTop: "18px" }}>
                                User Name
                            </p>
                            <div className="dropdown-menu">

                                <a className="dropdown-item" href="#">Change Password</a>
                                <a className="dropdown-item" href="#">Log Out</a>

                            </div>

                        </div>
                       
                       
                    </nav>

                </header>

                   

            </div>
        );
    }
}

export default HeaderComponent;