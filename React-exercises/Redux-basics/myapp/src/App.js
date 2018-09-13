import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            age:21
        };
    }

    ageUp = () => {
       this.setState({
           ...this.state,
           age: ++this.state.age
       });
    };

    ageDown = () => {
        this.setState({
            ...this.state,
            age: --this.state.age
        })
    };

  render() {
    return (
       <div className='App'>
           <div>Age : {this.state.age}</div>
           <input type="button" value="up" onClick={this.ageUp}/>
           <input type="button" value="down" onClick={this.ageDown}/>
       </div>
    );
  }
}

export default App;
