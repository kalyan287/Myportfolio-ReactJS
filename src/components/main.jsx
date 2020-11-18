import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';

import Landingpage from './landingpage';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import NotFound from "./notfound";


const Main = () =>(
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route  path="/aboutme" component={Landingpage}/>
        <Route  path="/projects" component={Projects}/>
        <Route  path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/not-found" component={NotFound} />
        <Redirect from='/' to='' />
    </Switch>
    );
 
export default Main;
