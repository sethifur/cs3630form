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
            fName: '',
            lName: '',
            email: '',
            phone: ''
        };
    }

    onChange(event){
        this.setState({
            fName: event.target.fName,
            lName: event.target.lName,
            email: event.target.email,
            phone: event.target.phone
        });
    }

    onSubmit(){
      this.props.x(this.state);
    }


    render(){
        return(
          <form name="myForm" onSubmit={this.onSubmit.bind(this)}>
                <br />
                <br />
				        <label for="fName">First Name: </label>
                <input id="fName" type="text" onChange={this.onChange} value={this.state.fName}
                  oninvalid="setCustomValidity('First Name is required')"required/>
				        <br />
				        <br />
				        <label for="fName">Last Name: </label>
				        <input id="lName" type="text"  onChange={this.onChange} value={this.state.lName}
                  oninvalid="setCustomValidity('Last Name is required')" required/>
                <br />
				        <br />
				        <label for="email">Email: </label>
				        <input id="email" type="email" onChange={this.onChange} value={this.state.email}
                  oninvalid="setCustomValidity('Enter Email Address (example@website.com)')" required/>
                <br />
				        <br />
				        <label for="phone">Phone: </label>
				        <input type="tel" name="number" pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$"
                  oninvalid="setCustomValidity('Enter Phone Number (888-888-8888)')" onChange={this.onChange}
                  value={this.state.phone} required/>
                <br />
				        <br />
				        <input type="submit" value="Submit"/>
                <br />
				        <br />
          </form>
        )
    }
}

export default Form;
