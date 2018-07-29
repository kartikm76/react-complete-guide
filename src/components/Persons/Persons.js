import React from 'react';
import Person from './Person/Person';

// return can be skipped by not using {} as shown in the first example
// compare it with the second one

/*
const persons = (props) => props.persons.map( (person, index) => {
    return 
        <Person
            clicked = {() => props.clicked( index )}
            name    = {person.name}
            age     = {person.age}
            key     = {person.id}
            changed = {( event ) => props.changed( event, person.id )}
        />
    } );

*/

// OR

const persons = (props) => {
    return (
        props.persons.map( (person, index) => {
        return <Person
                clicked = {() => props.clicked( index )}
                name    = {person.name}
                age     = {person.age}
                key     = {person.id}
                position = {index} 
                changed = {( event ) => props.changed( event, person.id )}
            />
        })
    )
};

export default persons;