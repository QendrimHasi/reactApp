import React, { useEffect, useContext } from "react";
import classes from "./Cockpit.css";
import Auth from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = React.useRef(null);
  const authContext = useContext(Auth);

  console.log(authContext.auth);

  useEffect(() => {
    console.log("useEffect");
    toggleBtnRef.current.click();
    // setTimeout(() => {
    //   alert("Save data to cloud");
    // }, 1000);
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
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.Red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Qendrim Hasi</p>
      <button
        ref={toggleBtnRef}
        className={btnClasses}
        // alt={showPersons.showPersons}
        onClick={props.click}
      >
        Show or hide
      </button>
      {<button onClick={authContext.login}>Log in</button>}
    </div>
  );
};

export default React.memo(Cockpit);
