import React, { Component } from 'react';
import image from '../logo.svg'
import DatePicker from 'react-date-picker'

class RegistrationPanelComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            email: '',
            birthDate: '',
            password: ''
        }


        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    saveUser(e) {

        alert(e);
    }

    clear() {
        this.setState({ email: '', password: '' });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div >
                        <div className="text-center">
                            <img src={image} width="70" height="70" />
                        </div>
                        <h3 className="text-center">Registration Panel</h3>


                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "20px" }}>

                            <div className="card-body">
                                <form >
                                    <table>
                                        <tr>
                                            <td><label >First Name</label></td>
                                            <td> <input name="firstName" className="form-control"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler} /></td>
                                        </tr>

                                        <tr>
                                            <td> <label>Last Name</label></td>
                                            <td><input name="lastName" className="form-control"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td> <label>Address</label></td>
                                            <td>   <input name="address" className="form-control"
                                                value={this.state.address} onChange={this.changeAddressHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td> <label>Phone</label></td>
                                            <td>   <input name="phone" className="form-control"
                                                value={this.state.phone} onChange={this.changePhoneHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td> <label>Email</label></td>
                                            <td>   <input name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeEmailHandler} /></td>
                                        </tr>
                                        <tr>
                                            <td> <label>Birth Date</label></td>
                                            <td>
                                            <input name="birthDate" className="form-control"
                                                value={this.state.birthDate} onChange={this.changeBirthDateHandler} />
                                                

                                            </td>
                                        </tr>
                                            <tr>
                                                <td> <label>Password</label></td>
                                                <td>  <input name="password" className="form-control"
                                                    value={this.state.password} onChange={this.changePasswordHandler} /></td>
                                            </tr>
                                            <tr style={{ marginTop: "20px" }}>
                                                <td > <button className="btn btn-success" onClick={this.saveUser.bind(this, "successfully login")} style={{ marginLeft: "110px", marginTop: "15px" }}>Register</button></td>
                                                <td> <button className="btn btn-danger" onClick={this.clear.bind(this)} style={{ marginLeft: "80px", marginTop: "15px" }}>Cancel</button></td>
                                            </tr>
                                       
                                    </table>
                                </form>
                            </div>

                            </div>
                        </div>
                    </div>

                </div>
        );
    }
}

export default RegistrationPanelComponent;