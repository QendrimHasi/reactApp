import React, { useState } from "react";

import './App.css';
// import Radium,{StyleRoot} from 'radium';
import Person from './Person/Person';
// import styled from 'styled-components';

const App = props => {

  // const StyledButton = styled.button`
  //   background-color: ${props=>props.alt ? 'red' : 'green'};
  //   color:white;
  //   font: inherit;
  //   border: 1px solid blue;
  //   padding: 8px;
  //   cursor: pointer;
  //   &:hover {
  //     background-color:${props=>props.alt ? 'salmon' : 'lightgreen'} ;
  //     color:black;
  //   }
  // `;

  const [personsState, setPersons] = useState({
    persons: [
      { id:"qwerty", name: "qendrim" },
      {id:"asdfg", name: "lum" },
      {id:"zxcvb", name: "filon" },
    ]
  });

  const [showPersons, setShowPersons] = useState({
    showPersons:false
  });

  const nameChangeHandler = (event,id) => {
    const personIndex = personsState.persons.findIndex( p => {
      return p.id===id;
    });
    const person = {...personsState.persons[personIndex]};

    person.name=event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex]=person;
    setPersons({persons:persons});
  }

  const deletePersonHandler = (personIndex) =>{
    const persons=[...personsState.persons];
    persons.splice(personIndex,1);
    setPersons({persons:persons});
  }

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

  const togglePersonsHandler = () => {
    setShowPersons({showPersons:!showPersons.showPersons});
  }

  let persons = null;

  if(showPersons.showPersons){
    persons=(
      <div>
        {
          personsState.persons.map((person,index)=>{
           return <Person key={person.id} name={person.name} click={()=>deletePersonHandler(index)}
            changed={(event)=>nameChangeHandler(event,person.id)}/>
          })
        }

    </div>
    );
    // style.backgroundColor="red";
    // style[':hover']={
    //   backgroundColor: "salmon",
    //   color:'black'
    // }
  }

  let classes=[];
  if(personsState.persons.length<=2){
    classes.push('red');
  }
  if(personsState.persons.length<=1){
    classes.push('bold');
  }
  


  return (
    // <StyleRoot>
    <div className="App">
      <p className={classes.join(" ")}>Qendrim Hasi</p>
      <StyledButton alt={showPersons.showPersons} onClick={togglePersonsHandler}>Show  or hide</StyledButton>
      {persons}
    </div>
    // </StyleRoot>
  );
}

export default App;