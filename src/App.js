import React, { Component } from 'react';
import cssClasses from './App.css';
import Person from './Person/Person';

// cssClasses was set by making changes as:
// 1. npm run eject
// 2. change the css loader config in webpack.config.dev.js
// 3. change the css loader config in webpack.config.prod.js
// For example instead of ".App" in css file, it could be still named as ".Person"

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "kkm", age: 45 },
      { id: 2, name: "mkk", age: 36 },
      { id: 3, name: "kmk", age: 40 }
    ],
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    console.log("Was clicked");
    this.setState ({
      persons: [
        { name: newName, age: 45 },
        { name: "mkk", age: 36 },
        { name: "kmk", age: 29 }
      ]   
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({ persons: persons } )
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // slice creates a new array and returns it
    const persons = [...this.state.persons]; // spreads out the elements from the old array into a new array
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePersonHandler = () => {
    //const doesShow = this.state.showPersons;
    //this.setState({showPersons: !doesShow});
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
      let persons = null;
      let buttonClass = '';

      if (this.state.showPersons) {
        persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return (
                    <Person
                      click = {() => this.deletePersonHandler(index)}
                      name  = {person.name}
                      age   = {person.age}
                      key   = {person.id}
                      changed = {(event) => this.nameChangedHandler(event, person.id)}
                    />                
                )})}
            </div>
        );
        buttonClass = cssClasses.red;
      }

      return (
        <div className={cssClasses.App}>
          <h1>Hi </h1>
          <p> This is a react app </p>
          <button className={buttonClass}
            onClick={this.togglePersonHandler}>Toggle Person
          </button>
          {persons}            
        </div>
    );
    //return React.createElement('div', null, 'h1', 'Hi, I am a react app');
  }
}

export default App; // Higher Order Component
