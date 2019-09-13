import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
width: 500px;
  margin: 20px;`;


function Photo (props) {

return (
    <div className="image">
        <StyledImage  src={props.imgUrl} />
    </div>
)


}

export default Photo