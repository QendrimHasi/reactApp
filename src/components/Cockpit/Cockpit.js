import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("useEffect");
    setTimeout(() => {
      alert("Save data to cloud");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] clean up work in useEffect");
    };
  }, []);
  useEffect(() => {
    console.log("2 useEffect");
    return () => {
      console.log("[Cockpit.js] clean up work in 2 useEffect");
    };
  });

  let btnClasses = "";

  let assignedClasses = [];
  if (props.showPersons) {
    btnClasses = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
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

export default Cockpit;
