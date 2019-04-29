import React from 'react'

export const PlayerList = (props) => {
  
  return (
    <div className="list">

      {props.PlayerList.map(Player => 
          <ul key={Player.id}>
            <li>{Player.name}</li>
          </ul>
        )}
      
    </div>
  )
  
}
