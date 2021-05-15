import React, { Component } from "react";
import classes from "./Person.css";
// import Radium from 'radium';
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import PropType from "prop-types";
import Auth from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = Auth;
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.auth);
  }
  render() {
    return (
      // <div className="Person" style={style}>
      // <div className={classes.Person}>
      <Aux>
        {this.context.auth ? <p>Authenticated</p> : <p>Please login</p>}
        <p onClick={this.props.click}>
          Im {this.props.name} and I am {Math.floor(Math.random() * 30)} years
          old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(input) => {
          //   this.inputElement = input;
          // }}
          ref={this.inputElementRef}
          value={this.props.name}
          onChange={this.props.changed}
        />
        {/* </div> */}
      </Aux>
    );
  }
}

Person.prototypes = {
  click: PropType.func,
  name: PropType.string,
  changed: PropType.func,
};

export default withClass(Person, classes.Person);
