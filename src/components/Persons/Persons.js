import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          click={() => this.props.click(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");

    if (nextProps.persons !== this.props.person) {
      return true;
    } else {
      return false;
    }
  }
}

export default Persons;
