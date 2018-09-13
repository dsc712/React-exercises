import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , NavLink , Redirect , Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

// stateless functional component
const User = (params) => {
    return (
            <h1> Welcome {params.username} </h1>
        );
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            loggedIn:false
        }
    }

    // login handler
    loginHandle = () => {
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }))
    };

  render() {
    return (
      <Router>
          <div className="App">
              <ul>
                  <li>
                      <NavLink style={ {padding:'10px'} } to='/' exact activeStyle={
                          {
                              color:'#ffffff',
                              background:'#121278',
                              textDecoration:'none',
                              padding:'10px',
                              borderRadius:'5%'
                          }
                      }>Home</NavLink>
                  </li>
                  <li>
                      <NavLink style={ {padding:'10px'} } to='/about' exact activeStyle={
                          {
                              color:'#ffffff',
                              background:'#121278',
                              textDecoration:'none',
                              padding:'10px',
                              borderRadius:'5%'
                          }
                      }>About</NavLink>
                  </li>
                  <li>
                      <NavLink style={ {padding:'10px'} } to='/users/dsc712' exact activeStyle={
                          {
                              color:'#ffffff',
                              background:'#121278',
                              textDecoration:'none',
                              padding:'10px',
                              borderRadius:'5%'
                          }
                      }>dsc712</NavLink>
                  </li>
                  <li>
                      <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>
                  </li>
              </ul>

              <Prompt
                  when={!this.state.loggedIn}
                  message={(location)=>{
                      return location.pathname.startsWith('/users') ? 'You need to be logged in to do that' : true
                  }}
              />

              <Route path="/" exact strict render={ () => {
                return (
                    <h1>Home Page</h1>
                )
              }}/>

              <Route path="/about" exact strict render={ () => {
                  return (
                      <h1>About Page</h1>
                  )
              }}/>

              <Route path="/users/:username" exact render={ ({match}) => {
                    return (
                        this.state.loggedIn ? ( <User username={match.params.username} /> ) : (<Redirect to='/' />)
                    )
              }}/>

          </div>

      </Router>
    );
  }
}

export default App;
