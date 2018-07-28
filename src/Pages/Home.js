import React from "react";
import {Link} from 'react-router-dom';
import logo from './../logo.svg';
import {Button} from "../Components/Components";
import './Home.css';

class Home extends React.Component {

    signIn = () => {
        return window.location.href = './SignIn';
    };

    signUp = () => {
        return window.location.href = './SignUp';
    };

    render() {
        return  <React.Fragment>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to Dialogue</h1>
                    </header>
                    <Button style={{marginLeft : 300, marginTop : 30}} type={'success'} onClick={this.signIn}>
                        I am already a registered user!
                    </Button>
                    <Button style={{marginLeft : 300, marginTop : 30}} type={'danger'} onClick={this.signUp}>
                        I am not registered!
                    </Button>
                </React.Fragment>;
    }
}

export default Home;