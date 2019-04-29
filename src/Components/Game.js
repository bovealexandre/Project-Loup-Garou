import React, {useState,setState} from 'react'
import {PlayerList} from './PlayerList'
import {PlayerUI} from './PlayerUI'
import {Chat} from './Chat'
import {WerewolfChat} from './WerewolfChat'

export const Game = () => {
  const [Players, setPlayers] = useState([{'id' : 1, 'name' : 'Alex', 'role' : 'werewolf'}, { 'id' : 2, 'name' : 'Nabil', 'role' : 'villager'}])
  const [Player, setPlayer] = useState({'id' : 1, 'name' : 'Alex', 'role' : 'Werewolf'})
  return (
    <div>
      <PlayerUI Player={Player}/>
      <PlayerList PlayerList={Players} />
      {(Player.role === 'Werewolf')?
        <WerewolfChat /> : ''}
      <Chat />
    </div>
  )
  
}
