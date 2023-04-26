import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
  // if (true){
    // throw new Error("Error detected"); ----- test ErrorBoundary
  // }
  return(
  <>
    {
      robots.map((user, i) =>{
      return (
       <Card 
          key={i} 
          id={robots[i].id} 
          name={robots[i].name} 
          email={robots[i].email}
        /> 
        );
      })
    };
  </>
  )}

export default CardList;

// {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>    the elements inside the brackets represents the props, for example id, name and email are props */}