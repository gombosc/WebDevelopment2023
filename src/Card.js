import React from 'react';


const Card = ({id, name, email }) =>{        // this actually represents {props}
  // id, name and email are put in brackets beacuse they represent a javascript expression,  destructuring
  // we could also do const {id, name, email} = props instead of the way above 
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>  {/* tachyons elements inside className*/}
      <img src={`https://robohash.org/${id}?200x200`} alt='Robots'></img>
      <div>
        <h1>{name}</h1>        {/* this represent props.name */}
        <p>{email}</p>          {/* this represent props.email */}
      </div>
    </div>
)
}

export default Card;
