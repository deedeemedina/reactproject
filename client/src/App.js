import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

/*class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
    };


  }
  handleSubmit = e => {
    e.preventDefault();
    const { name, password, email } = this.state;
    console.log(name, password, email)
    fetch('http://localhost:5000', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Accept':  'application/json'
      // },
      body: JSON.stringify(name, password, email),

    })
    
  }

  handleChange = e => {
    // console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }
  render() {

    return (

      <Router>

      <div className="App">
       <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
           <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" 
           className="PageSwitcher__Item">Sign In</NavLink>
           <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active"
           className="PageSwitcher__Item">Sign Up</NavLink>
       </div>


      <div className="FormTitle">
          <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" 
          className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/"
          activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
      </div>



        <Route exact path="/" Component={SignUpForm}>

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
             <div className="FormField">
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
          </div>

          <div className= "FormField">
          <button className="FormField__Button mr-20">Sign Up</button> <a href="#"
          className= "FormField__Link">I'm already a member</a>
          </div>
          </form>
        </div>

      </Route>

      <Route path="/sign-in" Component={SignInForm}>
  
      </Route>

    </div>

  </div>

 </Router>

    );
  }

}

export default App*/
