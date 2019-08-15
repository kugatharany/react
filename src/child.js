import React from 'react';

const Child = (props) =>{
    return (
        <div>
            <h1>{props.data}</h1>
            <h1>{props.age}</h1>
            <button onClick={props.handleClick}>Click me</button>
        </div>
    )
}

export default Child;