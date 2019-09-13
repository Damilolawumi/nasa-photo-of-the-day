import React from 'react';
import styled from "styled-components"

const StyledH1 = styled.h1`
font-family: cursive;
  color: #ca1b0e;
  border: 1px solid black;
    margin: 30px;
    margin: auto;
    width: 330px;
    border-radius: 7px;
    color: #972020;
    background-color: white;
    display: flex;
    justify-content: center;`;

const StyledParagraph = styled.p`
margin: 20px;
  font-family: georgia;
  text-align: justify;
  margin: auto;
    width: 600px;
    margin-top: 30px;
    margin-bottom: 30px;
  `;

function Name (props) {

    return (
        <div>
            <StyledH1 className="title" >
                {props.title}
            </StyledH1>
            <StyledParagraph className= "explanation">
                {props.explanation}
            </StyledParagraph>
        </div>
    )


}

export default Name