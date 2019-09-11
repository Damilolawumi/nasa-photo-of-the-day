import React from 'react';

function Name (props) {

    return (
        <div>
            <h1 className="title" >
                {props.title}
            </h1>
            <p className= "explanation">
                {props.explanation}
            </p>
        </div>
    )


}

export default Name