import React, { Component } from 'react';
import FooterComponent from './FooterComponent';

class SideComponent extends Component {
    render() {
        return (
            <div>
                <h5 style={{ fontSize : "15px" }}>Profile Page</h5>
                <hr/>
                <h5 style={{ fontSize : "15px" }}>Change Password</h5>
                <hr/>
                
            </div>
            
        );
    }
}

export default SideComponent;