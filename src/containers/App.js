import React, { PureComponent } from 'react';
import cssClasses from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import WithClass from '../hoc/WithClass';

// cssClasses was set by making changes as:
// 1. npm run eject
// 2. change the css loader config in webpack.config.dev.js
// 3. change the css loader config in webpack.config.prod.js
// For example instead of ".App" in css file, it could be still named as ".Person"

const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor (props) {
    super(props);
    console.log('App.js insdie constructor', this.props)
    // this.state can also be initialized here
    this.state = {
      persons: [
        { id: 1, name: "kkm", age: 45 },
        { id: 2, name: "mkk", age: 36 },
        { id: 3, name: "kmk", age: 40 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount () {
    console.log( '[App.js] Inside componentWillMount()' );
  }

  componentDidMount () {
    console.log( '[App.js] Inside componentDidMount()' );
  }
 
  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
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
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
        return {
          showPersons: !doesShow,
          // using this.tate may not lead to correct results
          // this.state update is an asynchronos operation
          // so it is possible that some other place of the code 
          // may have updated it
          // hence using prevState always gives the correct picture
          toggleClicked: prevState.toggleClicked + 1
        }
      } );
    //this.setState({showPersons: !this.state.showPersons});

  }

  loginHandler = () => {
    this.setState ({authenticated: true});    
  }

  render() {
      console.log("App.js inside render");
      let persons = null;

      if (this.state.showPersons) {
        persons = 
          <Persons 
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChangedHandler}
          />
      }

      return (
        <Aux>  
        { /* <div className={cssClasses.App}> */ }
        { /* this.props is used to access props in a component*/ }
        { /* props is used to access props in a function*/ }
          <h4>{this.props.title} in Main App - being passed from index</h4>
          <button onClick={() => {this.setState ({showPersons: true})}}> Show Person </button>          
          <Cockpit
            title = {this.props.title}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            login = {this.loginHandler}
            clicked = {this.togglePersonHandler}
          />
          {persons}
          
          { /*</div> */ }
          </Aux>
    );
    //return React.createElement('div', null, 'h1', 'Hi, I am a react app');
  }
}

//export default App;
export default WithClass(App, cssClasses.App); // Higher Order Component
