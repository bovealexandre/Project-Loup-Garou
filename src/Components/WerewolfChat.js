import React, { useState, setState} from 'react'

export const WerewolfChat = (props) => {
  const [Message, setMessage] = useState(null)
  const [Messages, setMessages] = useState([{'id': 1, 'sender': 'Alex', 'message': 'chat can work testttttttttttttttttttttttttttttttttttttttttttttt'},{'id': 2, 'sender': 'Alex', 'message': 'chat can work'},{'id': 3, 'sender': 'Alex', 'message': 'chat can work'},{'id': 4, 'sender': 'Alex', 'message': 'chat can work'},{'id': 5, 'sender': 'Alex', 'message': 'chat can work'},{'id': 6, 'sender': 'Alex', 'message': 'chat can work'}])
  const onChangeMessage = e=> {setMessage(e.target.value)}
  function onSubmit (e) {
    e.preventDefault();
    setMessage('')
  }
  return (
    <div className="ww-chat">
      <div className="messages">
        {Messages.map(Mess => 
          <ul key={Mess.id}>
            <li><b>{Mess.sender}</b> : {Mess.message}</li>
          </ul>
        )}
      </div>
      <form onSubmit={onSubmit} style={{ display: 'flex'}}>
        <input 
          type="text" 
          name="title" 
          style={{ padding: '5px'}}
          placeholder="Type in your message" 
          value={Message}
          onChange={onChangeMessage}
        />
      </form>
    </div>
  )
  
}