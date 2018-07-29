import React, { Component } from 'react';

// this is a wrapper component (Higher Order)
// it is a pattern to avoid redundandy for different components / functions that may have similar functionalty
// e.g. App component and Person function, both render a div and return the JSX
// this can be taken care through this one HOC
// it takes two parameters:
// 1. the name of the component (App) / function (Person) to be wrapped 
// 2. the cssClass name to be applied to the div
// this HoC can be used to implement the common and extra logic here. 
// In this case, its preparing a div and applying css ClassName
// after taking 2 args, its returning another anonymous functional component
// that takes props as parameter from the outer function that itself had 2 params
// inner function is preparing the div and returning the wrapped component inside that div
// {...props} is being used as there are multiple wrapped components passing their props
// this HoC needs to collect those props through this spread operator


// It returns anonymous function
// const WithClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

// export default WithClass;

// It returns anonymous stateful component so that state can be managed
// OR component life cycle methods can be used (e.g. to fetch the data from an API)
const WithClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>    
            )
        }
    }
}

export default WithClass;