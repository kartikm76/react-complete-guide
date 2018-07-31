import React from 'react';
import cssClasses from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = cssClasses.Button;

    if (props.showPersons) {
        buttonClass = [cssClasses.Button, cssClasses.red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push( cssClasses.red );
    }

    if (props.persons.length <= 1 ) {
        assignedClasses.push( cssClasses.bold );
    }

    return (
        <Aux>
            { /* this.props is used to access props in a component*/ }
            { /* props is used to access props in a function*/ }
            <h4>{props.title} in Cockpit - being passed from index to App to Cockpit </h4>
            <p className={assignedClasses.join(' ')}> This is real </p>
            <button className={buttonClass}
                    onClick={props.clicked}>Toggle Person
            </button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
}

export default cockpit;