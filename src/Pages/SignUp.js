import React from "react";
import './Main.css';
import {Button, Col, Info, Nav} from "../Components/Components";
import {Link} from "react-router-dom";
import Logo from "../Components/Logo1";
import {Footer} from "../Components/Footer";


class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email       : '',
            username    : '',
            password1   : '',
            password2   : '',
            err         : true
        };
    };

    handelChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    };

    sign = (e) =>{
        e.preventDefault();
        if(this.state.password1 !== this.state.password2){
            this.setState(prevState => {
                return {
                    err : false
                }
            });
        } else {
            this.props.history.push('/ChatRoom')
        }
    };

    render() {
        return  <React.Fragment>
                    <div className={'sign_up'}>
                        <Nav darkNav={''} src={Logo} button1Type={'outline-success'} hidButton1={false}
                             button2Type={'outline-danger'} hidButton2={true} hidLink={false}
                             hidLogo={true}/>
                        <Col size={5}>
                            <form>
                                <h3>Sign up</h3>
                                <small>or <Link to={'/SignIn'}>you have already an account</Link></small>
                                <br/><br/>
                                <Info inputType={'email'} iconType={'envelope'} iconSize={13} id={'inputEmail'}
                                      place={'Email'} value={this.state.email} onChange={this.handelChange}
                                      name={'email'}/>
                                <Info inputType={'text'} iconType={'user'} iconSize={18} id={'inputUsername'}
                                      place={'Username'} value={this.state.username} onChange={this.handelChange}
                                      name={'username'}/>
                                <Info inputType={'password'} iconType={'lock'} iconSize={20} id={'inputPassword1'}
                                      place={'Password'} value={this.state.password1} onChange={this.handelChange}
                                      name={'password1'}/>
                                <Info inputType={'password'} iconType={'lock'} iconSize={20} id={'inputPassword2'}
                                      place={'Confirmation Password'} value={this.state.password2}
                                      onChange={this.handelChange} name={'password2'}/>
                                <div style={{color : 'red'}} hidden={this.state.err}>
                                    ERROR: Your password and confirmation password do not match!
                                </div>
                                <br/>
                                <Button type={'primary'} children={'Sign up'} onChange={this.sign}/>
                            </form>
                        </Col>
                    </div>
                    <Footer/>
                </React.Fragment>;
    }
}

export default SignUp;