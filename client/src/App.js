import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
    };


  }
  handleSubmit = e => {
    // e.preventDefault();
    console.log("click")
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }
  render() {

    return (

      <div className="App">
       <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
           <a href="#" className="PageSwitcher__Item">Sign In</a>
           <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
       </div>
        <div className="FormTitle">
          <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#"className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
      </div>
        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
             <label className="FormField__Label" htmlFor="name">Full Name</label>
             <input 
              type="text" 
              id="name" 
              className="FormField__Input" 
              placeholder="Enter your full name" 
              name="name" 
              value={this.state.value} 
              onChange={this.handleChange}
            />
             </div>
             <div className="FormField">
             <label className="FormField__Label" htmlFor="password">Password</label>
             <input 
              type="password" 
              id="password" 
              className="FormField__Input" 
              placeholder="Enter your password" 
              name="password"
              value={this.state.value} 
              onChange={this.handleChange}
            />
             </div>
             <div className="FormField">
             <label className="FormField__Label" 
              htmlFor="email">E-mail Address</label>
             <input 
             type="email" id="email" 
             className="FormField__Input" 
             placeholder="Enter your email" 
             name="email" value={this.state.value} 
             onChange={this.handleChange}/>
             </div>
          <label 
          className="FormField__CheckboxLabel">
          <input 
          className="FormField__Checkbox" 
          type="checkbox" name="hasAgreed" /> I Agree all statements in <a 
          href="" 
          className="FormField__TermsLink" 
          value={this.state.value} 
          onChange={this.handleChange}>terms of service</a>
          </label>
               <button>click</button>
          </form>
      </div>
    </div>
</div>
      

    );
  }

}

export default App;
