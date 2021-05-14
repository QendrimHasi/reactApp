import React, { Component } from "react";
import classes from "./Person.css";
// import Radium from 'radium';

class Person extends Component {
  render() {
    return (
      // <div className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          Im {this.props.name} and I am {Math.floor(Math.random() * 30)} years
          old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </div>
    );
  }
}

export default Person;
