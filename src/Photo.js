import React from 'react';

function Photo (props) {

return (
    <div className="image">
        <img src={props.imgUrl} />
    </div>
)


}

export default Photo