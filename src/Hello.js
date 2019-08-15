import React from 'react';

//function Hello (props) {
const Hello = (props) => {
    return (
    <div className="App">
        <p>Hello, World!</p>
        <p>Welcome to react</p>
        <p>{props.greeting}</p>
    </div>
  );
}

export default Hello;