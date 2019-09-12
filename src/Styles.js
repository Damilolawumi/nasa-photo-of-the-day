import React from 'react';



const StyledH1 = styled.h1`
font-family: cursive;
  color: #ca1b0e;`;

const StyledParagraph = styled.p`
margin: 20px;
  font-family: georgia;
  text-align: justify;`;

const StyledImage = styled.img`
width: 500px;
  margin: 20px;`;

function Styled () {
  return (
    <div>
        <StyledH1 className="title" >
            {props.title}
        </StyledH1>
        <StyledParagraph className= "explanation">
            {props.explanation}
        </StyledParagraph>
    </div>

<div className="image">
<StyledImage src={props.imgUrl} />
</div>
)

}

export default styled