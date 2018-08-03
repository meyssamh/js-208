import React from "react";
import './Main.css';
import {Button, Col, Info, Nav} from "../Components/Components";
import {Link} from "react-router-dom";
import Logo from '../Components/Logo1';
import {Footer} from "../Components/Footer";


class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            username : '',
            password : ''
        };
    };

    handelChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    };

    render() {
        return  <React.Fragment>
                    <div className={'sign_in'}>
                        <Nav darkNav={''} src={Logo} button1Type={'outline-success'} hidButton1={true}
                             button2Type={'outline-danger'} hidButton2={false} hidLink={false}
                             hidLogo={true}/>
                        <Col size={5}>
                            <form>
                                <h3>Sign in</h3>
                                <small>or <Link to={'/SignUp'}>create an account</Link></small>
                                <br/><br/>
                                <Info inputType={'text'} iconType={'user'} iconSize={18} id={'inputUsername'}
                                      place={'Username'} value={this.state.username} onChange={this.handelChange}
                                      name={'username'}/>
                                <Info inputType={'password'} iconType={'lock'} iconSize={20} id={'inputPassword'}
                                      place={'Password'} value={this.state.password1} onChange={this.handelChange}
                                      name={'password'}/>
                                <br/>
                                <Link to={'/ChatRoom'}>
                                    <Button type={'primary'} children={'Sign in'}/>
                                </Link>
                            </form>
                        </Col>
                    </div>
                    <Footer/>
                </React.Fragment>;
    }
}

export default SignIn;