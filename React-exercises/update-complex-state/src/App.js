import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
      super(props);

      // state are properties of a component which are changed
      // as soon as a state is changed , render() method is called automatically
      this.state = {
          instructors: [
              {
                  name: 'Tim',
                  hobbies: ['sailing', 'react']
              }, {
                  name: 'Matt',
                  hobbies: ['math', 'd3']
              }, {
                  name: 'Colt',
                  hobbies: ['css', 'hiking']
              }, {
                  name: 'Elie',
                  hobbies: ['music', 'es2015']
              }
          ]
      };

      setTimeout(() => {

          // getting index of random instructor
          const randInstr = Math.floor(Math.random() * this.state.instructors.length);

          // getting index of random hobby of randomnly selected instructor
          const randHobby = Math.floor(Math.random() * this.state.instructors[randInstr].hobbies.length);

          // array.map creates a new array , with each value mapped with a new value
          const instructors = this.state.instructors.map((inst, i) => {

              if (i === randInstr) { // if current index is the index of randomnly selected instructor

                  const hobbies = [...inst.hobbies];  // spread values from hobbies array using spread operator

                  hobbies.splice(randHobby, 1);// splice the copy array , which means it is still a pure function

                  return {
                      ...inst, // spread the instructor object
                      hobbies  // override with the changed hobbies array
                  }

              } else {

                  return inst;
              }


          });

          this.setState({instructors}) ;  // change the state using setState() method

      }, 5000);



  }
  render(){

    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));

    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );

  }
}

export default App;
