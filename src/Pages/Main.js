//Vendor
import React from "react";
import {Route, Switch} from 'react-router-dom';

//Pages
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PageNotFound from './PageNotFound';
import ChatRoom from "./ChatRoom";

class Main extends React.Component {
    render() {
        return  <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/SignIn'} component={SignIn}/>
                    <Route path={'/SignUp'} component={SignUp}/>
                    <Route path={'/ChatRoom'} component={ChatRoom}/>

                    <Route component={PageNotFound}/>
                </Switch>;
    }
}

export default Main;