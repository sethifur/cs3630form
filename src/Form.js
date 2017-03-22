import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        //bind the specific instance of onchange from
        //this particular class to the onchange method
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //set default form state
        this.state = {
            fName: 's',
            lName: 'johns',
            email: 'seth@gmail.com',
            phone: '0123456789'
        };
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    onSubmit(){
      const eVal = /\S+@\S+\.\S+/;
      const pVal = /^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;


      if(this.state.fName !== ''){
        document.getElementById("invaidFName").innerHTML = "";
        if(this.state.lName !== ''){
          document.getElementById("invaidLName").innerHTML = "";
          if(this.state.email.match(eVal)){
            document.getElementById("invaidEmail").innerHTML = "";
            if(this.state.phone.match(pVal)){
              document.getElementById("invaidFName").innerHTML = "";
              document.getElementById("invaidLName").innerHTML = "";
              document.getElementById("invaidEmail").innerHTML = "";
              document.getElementById("invaidPhone").innerHTML = "";
                this.props.x(this.state);
            }
            else{
              console.log('false phone');
              document.getElementById("invaidPhone").innerHTML = "\tEnter Phone Number (888-888-8888)";
              document.getElementById("invaidPhone").style.color = "red";
              document.getElementById("invaidPhone").style.fontSize = "10px";
            }
          }
          else{
            console.log('false email');
            document.getElementById("invaidEmail").innerHTML = "\tEnter Email Address (example@website.com)";
            document.getElementById("invaidEmail").style.color = "red";
            document.getElementById("invaidEmail").style.fontSize = "10px";
          }
        }
        else{
          console.log('false lName');
          document.getElementById("invaidLName").innerHTML = "\tEnter Last Name";
          document.getElementById("invaidLName").style.color = "red";
          document.getElementById("invaidLName").style.fontSize = "10px";
        }
      }
      else{
        console.log('false fName');
        document.getElementById("invaidFName").innerHTML = "\tEnter First Name";
        document.getElementById("invaidFName").style.color = "red";
        document.getElementById("invaidFName").style.fontSize = "10px";
      }
    }


    render(){
        return(
          <div name="myForm" >
                <br />
                <br />
				        <label for="fName">First Name: </label>
                <input name="fName" type="text" onChange={this.onChange} value={this.state.fName}
                  oninvalid="setCustomValidity('First Name is required')"required/>
                <span id="invaidFName"></span>
				        <br />
				        <br />
				        <label for="lName">Last Name: </label>
				        <input name="lName" type="text"  onChange={this.onChange} value={this.state.lName}
                  oninvalid="setCustomValidity('Last Name is required')" required/>
                  <span id="invaidLName"></span>
                <br />
				        <br />
				        <label for="email">Email: </label>
				        <input name="email" type="email" onChange={this.onChange} value={this.state.email}
                  oninvalid="setCustomValidity('Enter Email Address (example@website.com)')" required/>
                  <span id="invaidEmail"></span>
                <br />
				        <br />
				        <label for="phone">Phone: </label>
				        <input type="tel" name="phone" pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$"
                  oninvalid="alert('Enter Phone Number (888-888-8888)')" onChange={this.onChange}
                  value={this.state.phone} required/>
                  <span id="invaidPhone"></span>
                <br />
				        <br />
				        <input type="submit" value="Submit" onClick={this.onSubmit.bind(this)}/>
                <br />
				        <br />
          </div>
        )
    }
}

export default Form;
