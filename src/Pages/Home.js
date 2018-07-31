import React from "react";
import logo from './../logo.svg';
import {Button, Container, Header} from "../Components/Components";
import './Home.css';
import {Link} from "react-router-dom";
import Logo from '../Components/logo';

class Home extends React.Component {

    render() {
        return  <React.Fragment>
                    <div className={'main'}>
                        <Header className={'dark'}>
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
                    <footer>
                        <div className="ui inverted vertical footer segment">
                            <div className="ui container">
                                <div className="ui stackable inverted divided equal height stackable grid">
                                    <div className="three wide column">
                                        <h4 className="ui inverted header">About</h4>
                                        <div className="ui inverted link list">
                                            <a href="#" className="item">Sitemap</a>
                                            <a href="#" className="item">Contact Us</a>
                                            <a href="#" className="item">Religious Ceremonies</a>
                                            <a href="#" className="item">Gazebo Plans</a>
                                        </div>
                                    </div>
                                    <div className="three wide column">
                                        <h4 className="ui inverted header">Services</h4>
                                        <div className="ui inverted link list">
                                            <a href="#" className="item">Banana Pre-Order</a>
                                            <a href="#" className="item">DNA FAQ</a>
                                            <a href="#" className="item">How To Access</a>
                                            <a href="#" className="item">Favorite X-Men</a>
                                        </div>
                                    </div>
                                    <div className="seven wide column">
                                        <h4 className="ui inverted header">Footer Header</h4>
                                        <p>Extra space for a call to action inside the footer that could help re-engage
                                            users.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </React.Fragment>;
    }
}

export default Home;