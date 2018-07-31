import React from "react";
import './SignIn.css';
import {Button, Col, Container, Header} from "../Components/Components";
import {Link} from "react-router-dom";
import Logo from '../Components/logo1';


class SignIn extends React.Component {
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
                                            <Link to={'./SignIn'}>
                                                <Button type={'outline-success'} children={'Log in'}/>
                                            </Link>
                                            &nbsp;
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
                                <div className="form-group">
                                    <input type="text" className="form-control" id="InputUsername"
                                                   aria-describedby="emailHelp" placeholder="&#xf007; Username"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="InputPassword"
                                           placeholder="&#xf023; Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </Col>
                    </div>
                </React.Fragment>;
    }
}

export default SignIn;