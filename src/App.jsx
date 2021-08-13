import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

class App extends Component {
    constructor(){
        super();
        this.state = {
            fullname: '',
            email: '',
            password: '',  
        }
        this.changeFullName = this.changeFullName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeFullName(e){
        this.setState({
            fullname: e.target.value});
    }
    changeEmail(e){
        this.setState({
            email: e.target.value});
    }
    changePassword(e){
        this.setState({
            password: e.target.value});
    }
    onSubmit(e){
        e.preventDefault()

        const registered = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        this.setState({
            fullname: '',
            email: '',
            password: ''

        })

    }
  render() {
    return (
      <div>
        <div className='container'>
            <div className='form-div'>
                <form onSubmit={this.onSubmit}>
                    <input type = 'text'
                    placeholder= 'Full Name'
                    onChange={this.changeFullName}
                    value={this.state.fullname}
                    className='form-control form-group'
                    />
                    <input type = 'text'
                    placeholder= 'Email'
                    onChange={this.changeEmail}
                    value={this.state.email}
                    className='form-control form-group'
                    />
                    <input type = 'text'
                    placeholder= 'Password'
                    onChange={this.changePassword}
                    value={this.state.password}
                    className='form-control form-group'
                    />
                    <input type='submit' className='btn btn-primary btn-block' value='Sign Up'/>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
