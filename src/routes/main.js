import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'
import Private from '../pages/Privateprojects'

const Main = () => (
<Switch>
    <Route exact path="/" component ={Home} />
    <Route path="/resume" component ={Resume} />
    <Route path="/contact" component ={Contact} />
    <Route path="/private" component ={Private} />
</Switch>
    
)

export default Main;