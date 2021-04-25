import React from 'react';
import './Person.css'
// import Radium from 'radium';
import styled from 'styled-components';

const StyleDiv =styled.div`
width: 60%;
margin: 16px auto;
border:1px solid #eee ;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px) {
        width:450px
}`;

const person = (props) => {
    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    };
    return (
        // <div className="Person" style={style}>
        <StyleDiv>
            <p onClick={props.click}>Im {props.name} and I am {Math.floor(Math.random() * 30)} years old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </StyleDiv>

    )
}

export default person;

