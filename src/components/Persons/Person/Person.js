import React from 'react';
import cssClasses from './Person.css';

// cssClasses was set by making changes as:
// 1. npm run eject
// 2. change the css loader config in webpack.config.dev.js
// 3. change the css loader config in webpack.config.prod.js
// For example instead of ".Person" in css file, it could be still named as ".App"

const person = (props) => {
    const rnd = Math.random();

    if (rnd > 0.7) {
        //throw new Error('Something went wrong');
    }

    return (
        <div className={cssClasses.Person}>
            <p onClick={props.clicked}>I am {props.name} and I am {props.age} old person</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
};

export default person;