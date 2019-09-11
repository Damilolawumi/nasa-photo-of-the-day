import React from 'react';

function Name (props) {

    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.explanation}
            </p>
        </div>
    )


}

export default Name