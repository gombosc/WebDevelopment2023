import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    return(
    <>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>    {/* the elements inside the brackets represents the props, for example id, name and email are props*/}
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    </>
    )
}

export default CardList;