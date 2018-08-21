// Vendor
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import {Button1, Col, Info, Nav} from '../Components/Components';
import Logo from '../Components/Logo1';
import {Footer} from '../Components/Footer';

// Css
import './Main.css';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email       : '',
            username    : '',
            password1   : '',
            password2   : '',
            err         : true,
            nav1Hidden  : true
        };
    };

    _isMounted = false;

    handelChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    };

    sign = (e) => {
        localStorage.setItem('username', this.state.username);
        if (this.state.password1 !== this.state.password2) {
            this.setState({
                    err: false
                }
            );
            e.preventDefault();
        } else if ((this.state.username.length && this.state.password1.length) > 1) {
            this.props.history.push('/ChatRoom');
        }
    };

    componentDidMount() {
        this._isMounted = true;
        this.whenScroll();
        window.addEventListener('scroll', () => {
            this.whenScroll();
        });
    };

    whenScroll = () => {
        if(this._isMounted === true) {
            if (window.scrollY > 50) {
                this.setState({
                    nav1Hidden: false
                });
            }
            if (window.scrollY <= 50) {
                this.setState({
                    nav1Hidden: true
                });
            }
        }
    };

    componentWillUnmount() {
        this._isMounted = false;
        this.whenScroll();
        window.removeEventListener('scroll', () => {
            this.whenScroll();
        });
    };

    render() {
        return  <React.Fragment>
                    <div className={'sign_up'}>
                        <Nav darkNav={''} src={Logo} button1Type={'outline-success'} hidButton1={false}
                             button2Type={'outline-danger'} hidButton2={true} hidLink={false}
                             hidLogo={true}/>
                        <Nav darkNav={'black bg-dark fixed-top'} src={Logo} button1Type={'outline-success'}
                             hidButton1={false} button2Type={'outline-danger'} hidButton2={true} hidLink={false}
                             hidLogo={true} hidden={this.state.nav1Hidden}/>
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
                                <Button1 type={'button'} typeBtn={'primary'} children={'Sign up'} onClick={this.sign}/>
                            </form>
                        </Col>
                    </div>
                    <Footer/>
                </React.Fragment>;
    }
}

export default SignUp;