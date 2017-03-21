import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {

  handleFormSubmit(data){
    console.log(data);
    var para = document.createElement("p");
    var node = document.createTextNode(`Name: ${data.fName} ${data.lName} \n Phone: ${data.phone} \n Email: ${data.email}`);
    para.appendChild(node);

    var element = document.getElementById('contacts');
    element.appendChild(para);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form x={this.handleFormSubmit}/>
        {this.props.children}
        <div id="contacts"></div>
      </div>

    );
  }
}

export default App;
