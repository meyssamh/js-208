import React from "react";
import './Main.css';
import {Button, Col, Container, Header} from "../Components/Components";
import {Link} from "react-router-dom";
import Logo from "../Components/Logo1";
import {Mail, Password, Password2, Username} from "../Components/Information";
import {Footer} from "../Components/Footer";


class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email       : '',
            username    : '',
            password1   : '',
            password2   : ''
        };
    };

    render() {
        return  <React.Fragment>
                    <div className={'sign_up'}>
                        <Header className={'dark'}>
                            <Container>
                                <Link to={'/'}>
                                    <img src={Logo} style={{height: 40}} className={'App-logo'} alt={'logo'}/>
                                </Link>
                                <div>
                                    <ul className={'navbar-nav'}>
                                        <li className={'nav-item'}>
                                            <Link to={'./SignIn'}>
                                                <Button type={'outline-success'} children={'Log in'}/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Container>
                        </Header>
                        <Col size={5}>
                            <form>
                                <h3>Sign up</h3>
                                <small>or <Link to={'./SignIn'}>you have already an account</Link></small>
                                <br/><br/>
                                <Mail/>
                                <Username/>
                                <Password/>
                                <Password2/>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </Col>
                    </div>
                    <Footer/>
                </React.Fragment>;
    }
}

export default SignUp;