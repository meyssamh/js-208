import React from "react";
import {Button, Container, Header} from "../Components/Components";
import './Main.css';
import {Link} from "react-router-dom";
import Logo from '../Components/Logo';
import {Footer} from "../Components/Footer";

class Home extends React.Component {

    render() {
        return  <React.Fragment>
                    <div className={'main'}>
                        <Header className={'dark'} >
                            <Container>
                                <img src={Logo} style={{height: 40}} className={'App-logo'} alt={'logo'}/>
                                <div>
                                    <ul className={'navbar-nav'}>
                                        <li className={'nav-item'}>
                                            <Link to={'/SignIn'}>
                                                <Button type={'outline-success'} children={'Log in'}/>
                                            </Link>
                                            &nbsp;
                                            <Link to={'/SignUp'}>
                                                <Button type={'outline-danger'} children={'Sign up'}/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Container>
                        </Header>
                        <Header className={'dark bg-dark fixed-top'} hidden>
                            <Container>
                                <img src={Logo} style={{height: 40}} className={'App-logo'} alt={'logo'}/>
                                <div>
                                    <ul className={'navbar-nav'}>
                                        <li className={'nav-item'}>
                                            <Link to={'/SignIn'}>
                                                <Button type={'outline-success'} children={'Log in'}/>
                                            </Link>
                                            &nbsp;
                                            <Link to={'/SignUp'}>
                                                <Button type={'outline-danger'} children={'Sign up'}/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Container>
                        </Header>
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