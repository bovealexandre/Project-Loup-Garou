import React, {useState,setState} from 'react'

export const PlayerUI = (props) => {
  const image = require('../assets/roles/'+props.Player.role+'.png')
  return (
    <div className="UI">

      {props.Player.name}<br/>
      {props.Player.role}<br/>
      <img src={image} className="role-img" />
    </div>
  )
  
}