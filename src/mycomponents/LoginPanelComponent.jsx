import React, { Component } from 'react';
import image from '../logo.svg'

class LoginPanelComponent extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:''
        }

        
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    saveUser(e)
    {
        
        alert(e);
    }

    clear()
    {
        this.setState({email:'',password:''});
    }

    changeEmailHandler=(event)=>
    {
        this.setState({email:event.target.value})
    }
    changePasswordHandler=(event)=>
    {
        this.setState({password:event.target.value})
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div >
                    <div className="text-center">
                        <img src={image} width="70" height="70" />
                    </div>
                    <h3 className="text-center">Login Panel</h3>
                    
                        
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop:"20px" }}>
                             
                            <div className="card-body">
                                <form>
                                    <div className="form-group text-center">
                                        <label>Email Address</label>
                                        <input name="email" className="form-control" 
                                          value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group text-center">
                                        <label>Password</label>
                                        <input name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveUser.bind(this,"successfully login")} style={{ marginLeft:"140px" }}>Save</button>
                                    <button className="btn btn-danger" onClick={this.clear.bind(this)} style={{ marginLeft:"80px" }}>Clear</button>
                                    <p className="text-center" style={{ marginTop :"15px"}}>Are you new here? <a href="/register">Register Now</a></p>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default LoginPanelComponent;