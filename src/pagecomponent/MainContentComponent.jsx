import React, { Component } from 'react';
import FooterComponent from './FooterComponent';



class MainContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: 'Likhon',
            lastName: 'Islam',
            address: 'Tangail',
            phone: '01723-775507',
            email: 'shafiq15049@gmail.com',
            birthDate: '24.07.2017'
        }
    }



    render() {
        return (

            <div >
                <p style={{ fontSize: "25px", marginBottom: "38px", marginTop: "10px" }}>User Profile</p>
                <hr></hr>

                <div align="center">
                    <table >
                        <tr >
                            <td><label>First Name </label></td>
                            <td>{"  :   " + this.state.firstName}</td>
                        </tr>
                        <tr>
                            <td><label>Last Name </label></td>
                            <td>{"  :   " + this.state.lastName}</td>
                        </tr>
                        <tr>
                            <td><label>Address  </label></td>
                            <td>{"  :   " + this.state.address}</td>
                        </tr>
                        <tr>
                            <td><label>Phone  </label></td>
                            <td>{"  :    " + this.state.phone}</td>
                        </tr>
                        <tr>
                            <td><label>Email  </label></td>
                            <td>{"      :    " + this.state.email}</td>
                        </tr>
                        <tr>
                            <td><label>Birthdate  </label></td>
                            <td>{"  :   " + this.state.birthDate}</td>
                        </tr>

                    </table>

                </div>
            </div>
           

        );
    }
}

export default MainContentComponent;