import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Content from './establishments/Content';

import {Room} from "./Components/Room"
import {Game} from "./Components/Game"


const Router = () => (
    <Switch>
        <Route exact path="/" component={Room} />
        <Route exact path="/game" component={Game} />
    </Switch>)

export default Router