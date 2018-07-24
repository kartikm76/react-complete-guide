import React from 'react';
import cssClasses from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = cssClasses.red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push( cssClasses.red );
    }

    if (props.persons.length <= 1 ) {
        assignedClasses.push( cssClasses.bold );
    }

    return (
        <div className={cssClasses.Cockpit}>
            <h1>Hi </h1>
            <p> This is a react app </p>
            <p className={assignedClasses.join(' ')}> This is real </p>
            <button className={buttonClass}
                    onClick={props.clicked}>Toggle Person
            </button>
        </div>
    );
}

export default cockpit;