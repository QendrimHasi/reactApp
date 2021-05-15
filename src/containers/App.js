import React, { Component } from "react";

import classes from "./App.css";
import { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";
import Auth from "../context/auth-context";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  // const StyledButton = styled.button`
  //   background-color: ${(props) => (props.alt ? "red" : "green")};
  //   color: white;
  //   font: inherit;
  //   border: 1px solid blue;
  //   padding: 8px;
  //   cursor: pointer;
  //   &:hover {
  //     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
  //     color: black;
  //   }
  // `;

  // const [personsState, setPersons] = useState({
  //   persons: [
  //     { id: "qwerty", name: "qendrim" },
  //     { id: "asdfg", name: "john" },
  //     { id: "zxcvb", name: "filon" },
  //   ],
  // });

  state = {
    persons: [
      { id: "qwerty", name: "qendrim" },
      { id: "asdfg", name: "john" },
      { id: "zxcvb", name: "filon" },
    ],
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    auth: false,
  };
  static getDerivedSateFromProps() {
    console.log("[App.js] getDerivedSateFromProps");
    return this.state;
  }
  // const [showPersons, setShowPersons] = useState({
  //   showPersons: false,
  // });

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changedCounter: prevState.changedCounter + 1,
      };
    });
  };

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  // componentDidUpdate() {
  //   console.log("[App.js] componentDidUpdate");
  // }

  componentWillUnmount() {}

  // const style = {
  //   backgroundColor: "green",
  //   color:"white",
  //   font: "inherit",
  //   border: "1px solid blue",
  //   padding: '8px',
  //   cursor: "pointer",
  //   ':hover':{
  //     backgroundColor: "lightgreen",
  //     color:'black'
  //   }
  // };

  togglePersonsHandler = () => {
    const doesShow = !this.state.showPersons;
    this.setState({ showPersons: doesShow });
  };
  loginHandler = () => {
    this.setState({ auth: true });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuth={this.state.auth}
          />
        </div>
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <Auth.Provider
          value={{ auth: this.state.auth, login: this.loginHandler }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              showPersons={this.state.showPersons}
              click={this.togglePersonsHandler}
              personsLength={this.state.persons.length}
              title={this.props.appTitle}
            />
          ) : null}

          {persons}
        </Auth.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
