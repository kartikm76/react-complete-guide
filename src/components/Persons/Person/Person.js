import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssClasses from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';

// cssClasses was set by making changes as:
// 1. npm run eject
// 2. change the css loader config in webpack.config.dev.js
// 3. change the css loader config in webpack.config.prod.js
// For example instead of ".Person" in css file, it could be still named as ".App"

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

//const person = (props) => {
    render () {
        return (
            <Aux>
            { /* <div className={cssClasses.Person}> */ }        
                <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age} old person</p>
                <p>{this.props.children}</p>
                <input
                    // ref is a keyword that is only applicable to stateful components
                    // it sets up a reference to this element
                    // inputElement is our own prop name
                    ref = {( inp ) => { this.inputElement = inp }}
                    type = "text" 
                    onChange = {this.props.changed} 
                    defaultValue = {this.props.name}/>
            { /* </div> */ }
            </Aux>
        )
    }
};

Person.propTypes = {
    click:      PropTypes.func,
    name:       PropTypes.string,
    age:        PropTypes.number,
    changed:    PropTypes.func 
}

//export default person;
export default WithClass(Person, cssClasses.Person);