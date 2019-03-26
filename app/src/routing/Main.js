import  React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import {Tasks} from "./Tasks";


export class Main extends Component{
    render() {
        return (<Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/tasks"} component={Tasks}/>
        </Switch>);
    }
}