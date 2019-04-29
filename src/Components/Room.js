import React, {useState,setState} from 'react'

export const Room = () => {
  const [Players, setPlayers] = useState([{'id' : 1, 'name' : 'Alex', 'role' : 'werewolf'}, { 'id' : 2, 'name' : 'Nabil', 'role' : 'villager'}])
  const [Player, setPlayer] = useState({'id' : 1, 'name' : 'Alex', 'role' : 'Werewolf'})
  const [Username, setUsername] = useState(null)
  const onChangeUsername = e=> {setUsername(e.target.value)}  

  function onSubmit (e) {
    e.preventDefault();
  }

  return (
    <div>
      {Players.map(Player => 
          <ul key={Player.id}>
            <li>{Player.name}</li>
          </ul>
        )}
        <form onSubmit={onSubmit} style={{ display: 'flex'}}>
        <input 
          type="text" 
          name="title" 
          style={{flex: '10', padding: '5px'}}
          placeholder="Type in your username" 
          value={Username}
          onChange={onChangeUsername}
        />
        <input  
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: '1'}}
        />
        </form>
    </div>
    
  
  )
}