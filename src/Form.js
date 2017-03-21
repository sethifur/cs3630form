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
      console.log(this.state);
      this.props.x(this.state);
    }


    render(){
        return(
          <div name="myForm" >
                <br />
                <br />
				        <label for="fName">First Name: </label>
                <input name="fName" type="text" onChange={this.onChange} value={this.state.fName}
                  oninvalid="setCustomValidity('First Name is required')"required/>
				        <br />
				        <br />
				        <label for="lName">Last Name: </label>
				        <input name="lName" type="text"  onChange={this.onChange} value={this.state.lName}
                  oninvalid="setCustomValidity('Last Name is required')" required/>
                <br />
				        <br />
				        <label for="email">Email: </label>
				        <input name="email" type="email" onChange={this.onChange} value={this.state.email}
                  oninvalid="setCustomValidity('Enter Email Address (example@website.com)')" required/>
                <br />
				        <br />
				        <label for="phone">Phone: </label>
				        <input type="tel" name="phone" pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$"
                  oninvalid="setCustomValidity('Enter Phone Number (888-888-8888)')" onChange={this.onChange}
                  value={this.state.phone} required/>
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
