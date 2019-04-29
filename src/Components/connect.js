import React, {useState,setState} from 'react';

export const Connect = () =>{
  const [Username, setUsername] = useState(null)
  const onChangeUsername = e=> {setUsername(e.target.value)}
  function onSubmit (e) {
    e.preventDefault();
  }
  return (
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
  )
}