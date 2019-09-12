import React from 'react';
import Styles from 'Styles';

function Name (props) {

    return (
        <div>
            <MyStylesH1 className="title" >
                {props.title}
            </MyStylesH1>
            <p className= "explanation">
                {props.explanation}
            </p>
        </div>
    )


}

export default Name