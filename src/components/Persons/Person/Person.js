import React from "react";
import classes from "./Person.css";
// import Radium from 'radium';
import styled from "styled-components";

const person = (props) => {
  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        Im {props.name} and I am {Math.floor(Math.random() * 30)} years old
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
