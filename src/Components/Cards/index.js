import React from 'react'
import "./cards.styles.css"
import Card from "../Card"

 const Cards = (props) => {
  console.log(props)
  return(
    <>
    <div className="card-list"> {props.monsters.map(users => (
      <Card key={users.id} monster={users} />
    ))}</div>
    
    </>
  )
}
export default Cards;