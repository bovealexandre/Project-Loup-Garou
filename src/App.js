import React, {useState,setState} from 'react';
import './style/App.css';
import socketIOClient from "socket.io-client";

import Router from './Router'

export const App = () => {
  const [EndPoint, setEndPoint] = useState("localhost:4001")

  const socket = socketIOClient({EndPoint});

  return (
    <div className="App">
      <header className="App-header">
        <Router />
        {/* <Game /> */}
        {/* <Connect/> */}
      </header>
    </div>
  );
}
