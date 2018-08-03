import React from "react";
import {Nav} from "../Components/Components";
import './Main.css';
import Logo from '../Components/Logo';
import Logo1 from '../Components/Logo1';
import {Footer} from "../Components/Footer";

class Home extends React.Component {

    render() {
        return  <React.Fragment>
                    <div className={'main'}>
                        <Nav darkNav={''} src={Logo} button1Type={'outline-success'} hidButton1={false}
                             button2Type={'outline-danger'} hidButton2={false} hidLink={true}
                             hidLogo={false} hidden={false}/>
                        <Nav darkNav={''} src={Logo1} button1Type={'outline-success'} hidButton1={false}
                             button2Type={'outline-danger'} hidButton2={false} hidLink={true}
                             hidLogo={false} hidden={true}/>
                        <div className={'home'}>
                            <h1 style={{marginTop : 50, fontSize : 70, color : 'black'}} className={'App-title'}>
                                Welcome to Dialogue</h1>
                        </div>
                    </div>
                    <Footer/>
                </React.Fragment>;
    }
}

export default Home;