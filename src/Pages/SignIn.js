import React from "react";
import './Main.css';
import {Button, Col, Container, Header} from "../Components/Components";
import {Link} from "react-router-dom";
import Logo from '../Components/Logo1';
import {Password, Username} from "../Components/Information";
import {Footer} from "../Components/Footer";


class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            username : '',
            password : ''
        };
    };

    render() {
        return  <React.Fragment>
                    <div className={'sign_in'}>
                        <Header className={'dark'}>
                            <Container>
                                <Link to={'/'}>
                                    <img src={Logo} style={{height: 40}} className={'App-logo'} alt={'logo'}/>
                                </Link>
                                <div>
                                    <ul className={'navbar-nav'}>
                                        <li className={'nav-item'}>
                                            <Link to={'./SignUp'}>
                                                <Button type={'outline-danger'} children={'Sign up'}/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Container>
                        </Header>
                        <Col size={5}>
                            <form>
                                <h3>Sign in</h3>
                                <small>or <Link to={'./SignUp'}>create an account</Link></small>
                                <br/><br/>
                                <Username/>
                                <Password/>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </Col>
                    </div>
                    <Footer/>
                </React.Fragment>;
    }
}

export default SignIn;