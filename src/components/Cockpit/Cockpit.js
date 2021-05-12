import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  let btnClasses = "";

  let assignedClasses = [];
  if (props.showPersons) {
    btnClasses = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div ClassName={classes.Cockpit}>
      <p className={assignedClasses.join(" ")}>Qendrim Hasi</p>
      <button
        className={btnClasses}
        // alt={showPersons.showPersons}
        onClick={props.click}
      >
        Show or hide
      </button>
    </div>
  );
};

export default cockpit;
