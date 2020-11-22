//Import react and reactDOM libraries


//import system is part of ES2015 modules system
//in CommonJS require used to reference dependencies
import React from 'react';
import ReactDOM from 'react-dom';


/* React: React is a javascript library, designed for building better user interfaces.
React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM
In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM. */


//Create a react component
const getButtonText = () =>{
    return 'Click on me';
}

//JSX can not print Javascript objects
//Test


const App = () => {
    return (
        <div>
            <label for="name" className="label" >
                Enter name
            </label>
            <input for ="name" type="text" />
            <button>
                {getButtonText()}
            </button>

        </div>
    );
};

//JSx special dialect of JS
//Browsers dont understand JSX 
//Babel convert JSX as well as ES2015+ javascript to ES5 javascsript which is normal
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)


// Show react component on screen


